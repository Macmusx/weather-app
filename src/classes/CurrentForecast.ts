import {CurrentForecastDto} from "../interfaces/CurrentForecastDto";
import {GlobalService} from "./GlobalService";

export class CurrentForecast {
    private readonly _air_quality: {};
    private readonly _condition: {
        text: string,
        icon: string,
        code: number
    };
    private readonly _feelslike_c: number;
    private readonly _feelslike_f: number;
    private readonly _gust_kph: number;
    private readonly _gust_mph: number;
    private readonly _is_day: number;
    private readonly _last_updated: string;
    private readonly _last_updated_epoch: number;
    private readonly _precip_in: number;
    private readonly _precip_mm: number;
    private readonly _pressure_in: number;
    private readonly _pressure_mb: number;
    private readonly _temp_c: number;
    private readonly _temp_f: number;
    private readonly _vis_km: number;
    private readonly _vis_miles: number;
    private readonly _wind_degree: number;
    private readonly _wind_dir: string;
    private readonly _wind_kph: number;
    private readonly _wind_mph: number;
    private readonly _cloud: number;
    private readonly _humidity: number;
    private readonly _uv: number;

    constructor(dto: CurrentForecastDto, private readonly engine: GlobalService) {
        this._air_quality = dto.air_quality;
        this._cloud = dto.cloud;
        this._condition = dto.condition;
        this._feelslike_c = dto.feelslike_c;
        this._feelslike_f = dto.feelslike_f;
        this._gust_kph = dto.gust_kph;
        this._gust_mph = dto.gust_mph;
        this._humidity = dto.humidity;
        this._is_day = dto.is_day;
        this._last_updated = dto.last_updated;
        this._last_updated_epoch = dto.last_updated_epoch;
        this._precip_in = dto.precip_in;
        this._precip_mm = dto.precip_mm;
        this._pressure_in = dto.pressure_in;
        this._pressure_mb = dto.pressure_mb;
        this._temp_c = dto.temp_c;
        this._temp_f = dto.temp_f;
        this._uv = dto.uv;
        this._vis_km = dto.vis_km;
        this._vis_miles = dto.vis_miles;
        this._wind_degree = dto.wind_degree;
        this._wind_dir = dto.wind_dir;
        this._wind_kph = dto.wind_kph;
        this._wind_mph = dto.wind_mph;

        console.log(this);
    }

    get cloud() {
        return `${this._cloud}%`;
    }

    get humidity() {
        return `${this._humidity}%`;
    }

    get uv() {
        return this._uv;
    }

    get temp() {
        return this.engine.unit === 'Metric' ? `${this._temp_c}°C` : `${this._temp_f}°F`;
    }

    get feelslike() {
        return this.engine.unit === 'Metric' ? `${this._feelslike_c}°C` : `${this._feelslike_f}°F`;
    }

    get day() {
        return this._is_day === 1;
    }

    get currentConditionMessage() {
        return this._condition.text;
    }

    get wind() {
        return this.engine.unit === 'Metric' ? `${this._wind_kph} km/h` : `${this._wind_mph} mph`;
    }

    get pressure() {
        return this.engine.unit === 'Metric' ? `${this._pressure_mb} mb` : `${this._pressure_in} in`;
    }

    get visibility() {
        return this.engine.unit === 'Metric' ? `${this._vis_km} km` : `${this._vis_miles} miles`;
    }

    get precipitation() {
        return this.engine.unit === 'Metric' ? `${this._precip_mm} mm` : `${this._precip_in} in`;
    }

    get weatherIcon() {
        switch (this._condition.code) {
            case 1000:
                return this.day ? 'sun.png' : 'clear_moon.png';
            case 1003:
                return this.day ? 'sunny.png' : 'half-moon.png';
            default:
                return 'nothing.png';
        }
    }
}