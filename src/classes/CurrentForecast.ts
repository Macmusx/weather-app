import {GlobalService} from "./GlobalService";
import {AirQuality, AirQualityDto} from "./AirQuality";
import {Condition, ConditionDto} from "./Condition";
import {ForecastShared} from "./ForecastShared";

export interface CurrentForecastDto {
    air_quality: AirQualityDto;
    cloud: number;
    condition: ConditionDto;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
}

export class CurrentForecast extends ForecastShared {
    private readonly _air_quality: AirQuality;
    private readonly _condition: Condition;
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

    constructor(dto: CurrentForecastDto, engine: GlobalService) {
        super(engine);
        this._air_quality = new AirQuality(dto.air_quality, engine);
        this._cloud = dto.cloud;
        this._condition = new Condition(dto.condition, engine);
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
        return super.getTemp(this._temp_c, this._temp_f);
    }

    get feelslike() {
        return super.getFeelsLike(this._feelslike_c, this._feelslike_f);
    }

    get day() {
        return this._is_day === 1;
    }

    get currentConditionMessage() {
        return this._condition.text;
    }

    get weatherIcon() {
        return super.getWeatherIcon(this._condition.code, this.day);
    }

    get wind() {
        return super.getWind(this._wind_kph, this._wind_mph);
    }

    get pressure() {
        return super.getPressure(this._pressure_mb, this._pressure_in);
    }

    get visibility() {
        return super.getVisibility(this._vis_km, this._vis_miles);
    }

    get precipitation() {
        return super.getPrecipitation(this._precip_mm, this._precip_in);
    }
}