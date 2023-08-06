import React from "react";
import {LocationDto} from "../interfaces/Location";
import {apiKey} from "../apiKey";
import {CurrentForecastDto} from "../interfaces/CurrentForecast";

export class GlobalService {
    refresh: boolean | undefined;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>> | undefined;

    loading: boolean;
    location: LocationDto | null;
    currentForecast: CurrentForecastDto | null;

    private ip: string = '';

    constructor() {
        this.loading = true;
        this.location = null;
        this.currentForecast = null;
        this.getIp()
            .then(() => this.getLocationByIp());
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
        const result = await (await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.location.name}&aqi=yes`)).json();

        this.currentForecast = result.current;
        this.loading = false;
        this.setRefresh(!this.refresh);
    }
}