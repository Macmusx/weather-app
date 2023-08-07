import React from "react";
import {LocationDto} from "../interfaces/LocationDto";
import {apiKey} from "../apiKey";
import {CurrentForecast} from "./CurrentForecast";
import {CurrentForecastDto} from "../interfaces/CurrentForecastDto";

export type Unit = 'C' | 'F';

export class GlobalService {
    refresh: boolean | undefined;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>> | undefined;

    loading: boolean;
    location: LocationDto | null;
    currentForecast: CurrentForecast | null;
    unit: Unit = 'C';

    loadCurrentLocationOnStart: boolean = true;
    persistSettings: boolean = true;

    private ip: string = '';

    constructor() {
        this.loading = true;
        this.location = null;
        this.currentForecast = null;

        this.persistSettings = localStorage.getItem('persistSettings') === 'true';
        if (this.persistSettings) {
            const unit = localStorage.getItem('unit');
            if (unit === 'C' || unit === 'F')
                this.unit = unit;
            this.loadCurrentLocationOnStart = localStorage.getItem('loadCurrentLocationOnStart') === 'true';
        }
    }

    setUnit(unit: Unit) {
        if (!this.setRefresh) return;
        this.unit = unit;
        if (this.persistSettings) {
            localStorage.setItem('unit', unit);
        }
        this.setRefresh(!this.refresh);
    }

    switchPersistSettings() {
        if (!this.setRefresh) return;
        this.persistSettings = !this.persistSettings;
        localStorage.setItem('persistSettings', this.persistSettings.toString());
        this.setRefresh(!this.refresh);
    }

    switchLoadCurrentLocationOnStart() {
        if (!this.setRefresh) return;
        this.loadCurrentLocationOnStart = !this.loadCurrentLocationOnStart;
        if (this.persistSettings) {
            localStorage.setItem('loadCurrentLocationOnStart', this.loadCurrentLocationOnStart.toString());
        }
        this.setRefresh(!this.refresh);
    }

    registerRefresh(refresh: boolean, setRefresh: React.Dispatch<React.SetStateAction<boolean>>) {
        this.refresh = refresh;
        this.setRefresh = setRefresh;
    }

    async getIp() {
        const result = await (await fetch('https://api.ipify.org?format=json')).json();
        this.ip = result.ip;
    }

    async getLocationByIp() {
        if (!this.setRefresh) return;
        const result = await (await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.ip}&aqi=yes`)).json();

        await this.getCurrentForecast();

        this.location = result.location;
        this.setRefresh(!this.refresh);
    }

    async setLocationAndFetch(location: LocationDto) {
        this.loading = true;
        this.location = location;
        await this.getCurrentForecast();
    }

    async getCurrentForecast() {
        if (!this.location) return;
        if (!this.setRefresh) return;
        const result = await (await
            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.location.name}&aqi=yes`))
            .json() as { current: CurrentForecastDto };

        this.currentForecast = new CurrentForecast(result.current, this);
        this.loading = false;
        this.setRefresh(!this.refresh);
    }
}