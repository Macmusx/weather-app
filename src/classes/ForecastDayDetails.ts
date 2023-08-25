import {Condition, ConditionDto} from "./Condition";
import {AirQualityDto} from "./AirQuality";
import {GlobalService} from "./GlobalService";
import {ForecastShared} from "./ForecastShared";

export interface ForecastDayDetailsDto {
  maxtemp_c: number,
  maxtemp_f: number,
  mintemp_c: number,
  mintemp_f: number,
  avgtemp_c: number,
  avgtemp_f: number,
  maxwind_mph: number,
  maxwind_kph: number,
  totalprecip_mm: number,
  totalprecip_in: number,
  totalsnow_cm: number,
  avgvis_km: number,
  avgvis_miles: number,
  avghumidity: number,
  daily_will_it_rain: number,
  daily_chance_of_rain: string,
  daily_will_it_snow: number,
  daily_chance_of_snow: string,
  condition: ConditionDto,
  uv: number,
  air_quality: AirQualityDto,
}

export class ForecastDayDetails extends ForecastShared {
  private readonly _maxtemp_c: number;
  private readonly _maxtemp_f: number;
  private readonly _mintemp_c: number;
  private readonly _mintemp_f: number;
  private readonly _avgtemp_c: number;
  private readonly _avgtemp_f: number;
  private readonly _maxwind_mph: number;
  private readonly _maxwind_kph: number;
  private readonly _totalprecip_mm: number;
  private readonly _totalprecip_in: number;
  private readonly _totalsnow_cm: number;
  private readonly _avgvis_km: number;
  private readonly _avgvis_miles: number;
  private readonly _avghumidity: number;
  private readonly _daily_will_it_rain: number;
  private readonly _daily_chance_of_rain: string;
  private readonly _daily_will_it_snow: number;
  private readonly _daily_chance_of_snow: string;
  private readonly _condition: Condition;
  private readonly _uv: number;

  constructor(dto: ForecastDayDetailsDto, engine: GlobalService) {
    super(engine);
    this._maxtemp_c = dto.maxtemp_c;
    this._maxtemp_f = dto.maxtemp_f;
    this._mintemp_c = dto.mintemp_c;
    this._mintemp_f = dto.mintemp_f;
    this._avgtemp_c = dto.avgtemp_c;
    this._avgtemp_f = dto.avgtemp_f;
    this._maxwind_mph = dto.maxwind_mph;
    this._maxwind_kph = dto.maxwind_kph;
    this._totalprecip_mm = dto.totalprecip_mm;
    this._totalprecip_in = dto.totalprecip_in;
    this._totalsnow_cm = dto.totalsnow_cm;
    this._avgvis_km = dto.avgvis_km;
    this._avgvis_miles = dto.avgvis_miles;
    this._avghumidity = dto.avghumidity;
    this._daily_will_it_rain = dto.daily_will_it_rain;
    this._daily_chance_of_rain = dto.daily_chance_of_rain;
    this._daily_will_it_snow = dto.daily_will_it_snow;
    this._daily_chance_of_snow = dto.daily_chance_of_snow;
    this._condition = new Condition(dto.condition, this.engine);
    this._uv = dto.uv;
  }

  get weatherIcon() {
    return super.getWeatherIcon(this._condition.code, true);
  }

  get temp() {
    return super.getTemp(this._avgtemp_c, this._avgtemp_f);
  }

  get currentConditionMessage() {
    return this._condition.text;
  }
}