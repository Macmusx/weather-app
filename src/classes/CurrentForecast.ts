import {CurrentForecastDto} from "../interfaces/CurrentForecastDto";
import {GlobalService} from "./GlobalService";

export class CurrentForecast {
    private air_quality: {};
    private cloud: number;
    private condition: {
        text: string,
        icon: string,
        code: number
    };
    private feelslike_c: number;
    private feelslike_f: number;
    private gust_kph: number;
    private gust_mph: number;
    private humidity: number;
    private is_day: number;
    private last_updated: string;
    private last_updated_epoch: number;
    private precip_in: number;
    private precip_mm: number;
    private pressure_in: number;
    private pressure_mb: number;
    private temp_c: number;
    private temp_f: number;
    private uv: number;
    private vis_km: number;
    private vis_miles: number;
    private wind_degree: number;
    private wind_dir: string;
    private wind_kph: number;
    private wind_mph: number;

    constructor(dto: CurrentForecastDto, private readonly engine: GlobalService) {
        this.air_quality = dto.air_quality;
        this.cloud = dto.cloud;
        this.condition = dto.condition;
        this.feelslike_c = dto.feelslike_c;
        this.feelslike_f = dto.feelslike_f;
        this.gust_kph = dto.gust_kph;
        this.gust_mph = dto.gust_mph;
        this.humidity = dto.humidity;
        this.is_day = dto.is_day;
        this.last_updated = dto.last_updated;
        this.last_updated_epoch = dto.last_updated_epoch;
        this.precip_in = dto.precip_in;
        this.precip_mm = dto.precip_mm;
        this.pressure_in = dto.pressure_in;
        this.pressure_mb = dto.pressure_mb;
        this.temp_c = dto.temp_c;
        this.temp_f = dto.temp_f;
        this.uv = dto.uv;
        this.vis_km = dto.vis_km;
        this.vis_miles = dto.vis_miles;
        this.wind_degree = dto.wind_degree;
        this.wind_dir = dto.wind_dir;
        this.wind_kph = dto.wind_kph;
        this.wind_mph = dto.wind_mph;
    }

    get temp() {
        return this.engine.unit === 'C' ? `${this.temp_c}°C` : `${this.temp_f}°F`;
    }

    get feelslike() {
        return this.engine.unit === 'C' ? `${this.feelslike_c}°C` : `${this.feelslike_f}°F`;
    }

    get day() {
        return this.is_day === 1;
    }

    get currentConditionMessage() {
        return this.condition.text;
    }

    get weatherIcon() {
        if (this.day) {
            if (this.condition.code === 1000) return 'sun.png';
            else if (this.condition.code === 1003) return 'sunny.png';
            else return 'nothing.png';
        } else {
            if (this.condition.code === 1000) return 'clear_moon.png';
            else if (this.condition.code === 1003) return 'half-moon.png';
            else return 'nothing.png';
        }
    }
}