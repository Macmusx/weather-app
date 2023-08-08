import {ForecastDay, ForecastDayDto} from "./ForecastDay";
import {GlobalService} from "./GlobalService";

export interface ForecastDto {
    alerts: {
        alert: any[]
    } | undefined,
    forecastday: ForecastDayDto[]
}

export class Forecast {
    private readonly _alerts: {
        alert: any[]
    } | undefined;
    private readonly _forecastDay: ForecastDay[] = [];

    constructor(dto: ForecastDto, private readonly engine: GlobalService) {
        this._alerts = dto.alerts;
        dto.forecastday.forEach((forecastDay) => {
            this._forecastDay.push(new ForecastDay(forecastDay, this.engine));
        });
    }

    get forecastDays(): ForecastDay[] {
        return this._forecastDay;
    }
}