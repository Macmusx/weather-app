import {GlobalService} from "./GlobalService";

export interface ForecastDayAstroDto {
    sunrise: string,
    sunset: string,
    moonrise: string,
    moonset: string,
    moon_phase: string,
    moon_illumination: string,
    is_moon_up: 0 | 1,
    is_sun_up: 0 | 1,
}

export class ForecastDayAstro {
    private readonly _sunrise: string;
    private readonly _sunset: string;
    private readonly _moonrise: string;
    private readonly _moonset: string;
    private readonly _moon_phase: string;
    private readonly _moon_illumination: string;
    private readonly _is_moon_up: 0 | 1;
    private readonly _is_sun_up: 0 | 1;

    constructor(dto: ForecastDayAstroDto, private readonly engine: GlobalService) {
        this._sunrise = dto.sunrise;
        this._sunset = dto.sunset;
        this._moonrise = dto.moonrise;
        this._moonset = dto.moonset;
        this._moon_phase = dto.moon_phase;
        this._moon_illumination = dto.moon_illumination;
        this._is_moon_up = dto.is_moon_up;
        this._is_sun_up = dto.is_sun_up;
    }
}