import {Condition, ConditionDto} from "./Condition";
import {AirQuality, AirQualityDto} from "./AirQuality";
import {GlobalService} from "./GlobalService";

export interface ForecastDayHourDto {
    time_epoch: number,
    time: string,
    temp_c: number,
    temp_f: number,
    is_day: 0 | 1,
    condition: ConditionDto,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    windchill_c: number,
    windchill_f: number,
    heatindex_c: number,
    heatindex_f: number,
    dewpoint_c: number,
    dewpoint_f: number,
    will_it_rain: 0 | 1,
    chance_of_rain: string,
    will_it_snow: 0 | 1,
    chance_of_snow: string,
    vis_km: number,
    vis_miles: number,
    gust_mph: number,
    gust_kph: number,
    uv: number,
    air_quality: AirQualityDto
}

export class ForecastDayHour {
    private readonly _time_epoch: number;
    private readonly _time: string;
    private readonly _temp_c: number;
    private readonly _temp_f: number;
    private readonly _is_day: 0 | 1;
    private readonly _condition: Condition;
    private readonly _wind_mph: number;
    private readonly _wind_kph: number;
    private readonly _wind_degree: number;
    private readonly _wind_dir: string;
    private readonly _pressure_mb: number;
    private readonly _pressure_in: number;
    private readonly _precip_mm: number;
    private readonly _precip_in: number;
    private readonly _humidity: number;
    private readonly _cloud: number;
    private readonly _feelslike_c: number;
    private readonly _feelslike_f: number;
    private readonly _windchill_c: number;
    private readonly _windchill_f: number;
    private readonly _heatindex_c: number;
    private readonly _heatindex_f: number;
    private readonly _dewpoint_c: number;
    private readonly _dewpoint_f: number;
    private readonly _will_it_rain: 0 | 1;
    private readonly _chance_of_rain: string;
    private readonly _will_it_snow: 0 | 1;
    private readonly _chance_of_snow: string;
    private readonly _vis_km: number;
    private readonly _vis_miles: number;
    private readonly _gust_mph: number;
    private readonly _gust_kph: number;
    private readonly _uv: number;
    private readonly _air_quality: AirQuality;

    constructor(dto: ForecastDayHourDto, private readonly engine: GlobalService) {
        this._time_epoch = dto.time_epoch;
        this._time = dto.time;
        this._temp_c = dto.temp_c;
        this._temp_f = dto.temp_f;
        this._is_day = dto.is_day;
        this._condition = new Condition(dto.condition, this.engine);
        this._wind_mph = dto.wind_mph;
        this._wind_kph = dto.wind_kph;
        this._wind_degree = dto.wind_degree;
        this._wind_dir = dto.wind_dir;
        this._pressure_mb = dto.pressure_mb;
        this._pressure_in = dto.pressure_in;
        this._precip_mm = dto.precip_mm;
        this._precip_in = dto.precip_in;
        this._humidity = dto.humidity;
        this._cloud = dto.cloud;
        this._feelslike_c = dto.feelslike_c;
        this._feelslike_f = dto.feelslike_f;
        this._windchill_c = dto.windchill_c;
        this._windchill_f = dto.windchill_f;
        this._heatindex_c = dto.heatindex_c;
        this._heatindex_f = dto.heatindex_f;
        this._dewpoint_c = dto.dewpoint_c;
        this._dewpoint_f = dto.dewpoint_f;
        this._will_it_rain = dto.will_it_rain;
        this._chance_of_rain = dto.chance_of_rain;
        this._will_it_snow = dto.will_it_snow;
        this._chance_of_snow = dto.chance_of_snow;
        this._vis_km = dto.vis_km;
        this._vis_miles = dto.vis_miles;
        this._gust_mph = dto.gust_mph;
        this._gust_kph = dto.gust_kph;
        this._uv = dto.uv;
        this._air_quality = new AirQuality(dto.air_quality, this.engine);
    }
}