import {ForecastDayDetails, ForecastDayDetailsDto} from "./ForecastDayDetails";
import {ForecastDayAstro, ForecastDayAstroDto} from "./ForecastDayAstro";
import {ForecastDayHour, ForecastDayHourDto} from "./ForecastDayHour";
import {GlobalService} from "./GlobalService";

export interface ForecastDayDto {
    date: string,
    date_epoch: number,
    day: ForecastDayDetailsDto,
    astro: ForecastDayAstroDto,
    hour: ForecastDayHourDto[]
}

export class ForecastDay {
    private readonly _date: string;
    private readonly _date_epoch: number;
    private readonly _day: ForecastDayDetails;
    private readonly _astro: ForecastDayAstro;
    private readonly _hour: ForecastDayHour[] = [];

    constructor(dto: ForecastDayDto, private readonly engine: GlobalService) {
        this._date = dto.date;
        this._date_epoch = dto.date_epoch;
        this._day = new ForecastDayDetails(dto.day, this.engine);
        this._astro = new ForecastDayAstro(dto.astro, this.engine);
        dto.hour.forEach((hour) => {
            this._hour.push(new ForecastDayHour(hour, this.engine));
        });
    }

    get epoch(): number {
        return this._date_epoch;
    }

    get day(): ForecastDayDetails {
        return this._day;
    }

    get dateMessageRelativeToToday(): String {
        const today = new Date();
        const date = new Date(this._date_epoch * 1000);
        if (today.getDate() === date.getDate()) {
            return "Today";
        } else if (today.getDate() + 1 === date.getDate()) {
            return "Tomorrow";
        } else {
            if (this.engine.unit === "Metric") {
                return date.toLocaleDateString("en-GB", {month: "numeric", day: "numeric", year: "numeric"});
            }
            if (this.engine.unit === "Imperial") {
                return date.toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"});
            }
            return '';
        }
    }
}