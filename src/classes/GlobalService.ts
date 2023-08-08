import React from "react";
import {LocationDto} from "../interfaces/LocationDto";
import {apiKey} from "../apiKey";
import {CurrentForecast, CurrentForecastDto} from "./CurrentForecast";
import {Forecast, ForecastDto} from "./Forecast";

export type Unit = 'Imperial' | 'Metric';

export class GlobalService {
    refresh: boolean | undefined;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>> | undefined;

    loading: boolean = true;
    location: LocationDto | null = null;
    unit: Unit = 'Metric';

    currentForecast: CurrentForecast | null = null;
    forecast: Forecast | null = null;

    loadCurrentLocationOnStart: boolean = true;
    persistSettings: boolean = true;

    private ip: string = '';

    constructor() {
        this.setup();

        this.persistSettings = localStorage.getItem('persistSettings') === 'true';
        if (this.persistSettings) {
            const unit = localStorage.getItem('unit');
            if (unit === 'Metric' || unit === 'Imperial')
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
        await this.getLocationByIp();
    }

    async getLocationByIp() {
        const result = await (await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.ip}&aqi=yes`)).json();

        this.location = result.location;
        await this.getCurrentForecast();
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
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.location.name}&days=3&aqi=yes&alerts=yes`))
            .json() as { current: CurrentForecastDto, forecast: ForecastDto };

        this.forecast = new Forecast(result.forecast, this);
        this.currentForecast = new CurrentForecast(result.current, this);
    }

    private setup() {
        const persistSettings = localStorage.getItem('persistSettings');
        if (persistSettings === null)
            localStorage.setItem('persistSettings', 'true');

        const unit = localStorage.getItem('unit');
        if (unit === null)
            localStorage.setItem('unit', 'C');

        const loadCurrentLocationOnStart = localStorage.getItem('loadCurrentLocationOnStart');
        if (loadCurrentLocationOnStart === null)
            localStorage.setItem('loadCurrentLocationOnStart', 'true');
    }
}