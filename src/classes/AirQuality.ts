import {GlobalService} from "./GlobalService";

export interface AirQualityDto {
    co: number,
    so2: number,
    gb_defra_index: number,
    no2: number,
    o3: number,
    pm10: number,
    pm2_5: number,
    us_epa_index: number,
}

export class AirQuality {
    private readonly _co: number;
    private readonly _so2: number;
    private readonly _gb_defra_index: number;
    private readonly _no2: number;
    private readonly _o3: number;
    private readonly _pm10: number;
    private readonly _pm2_5: number;
    private readonly _us_epa_index: number;

    constructor(airQuality: AirQualityDto, private readonly engine: GlobalService) {
        this._co = airQuality.co;
        this._so2 = airQuality.so2;
        this._gb_defra_index = airQuality.gb_defra_index;
        this._no2 = airQuality.no2;
        this._o3 = airQuality.o3;
        this._pm10 = airQuality.pm10;
        this._pm2_5 = airQuality.pm2_5;
        this._us_epa_index = airQuality.us_epa_index;
    }

    get co(): number {
        return this._co;
    }

    get so2(): number {
        return this._so2;
    }

    get gb_defra_index(): number {
        return this._gb_defra_index;
    }

    get no2(): number {
        return this._no2;
    }

    get o3(): number {
        return this._o3;
    }

    get pm10(): number {
        return this._pm10;
    }

    get pm2_5(): number {
        return this._pm2_5;
    }

    get us_epa_index(): number {
        return this._us_epa_index;
    }


}