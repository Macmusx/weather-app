import {GlobalService} from "./GlobalService";

export abstract class ForecastShared {

    protected constructor(protected readonly engine: GlobalService) {
    }

    getWeatherIcon(code: number, day: boolean) {
        switch (code) {
            case 1000:
                return day ? 'sun.png' : 'clear_moon.png';
            case 1003:
                return day ? 'sunny.png' : 'half-moon.png';
            default:
                return 'nothing.png';
        }
    }

    getWind(wind_kph: number, wind_mph: number) {
        return this.engine.unit === 'Metric' ? `${wind_kph} km/h` : `${wind_mph} mph`;
    }

    getPressure(pressure_mb: number, pressure_in: number) {
        return this.engine.unit === 'Metric' ? `${pressure_mb} mb` : `${pressure_in} in`;
    }

    getVisibility(vis_km: number, vis_miles: number) {
        return this.engine.unit === 'Metric' ? `${vis_km} km` : `${vis_miles} miles`;
    }

    getPrecipitation(precip_mm: number, precip_in: number) {
        return this.engine.unit === 'Metric' ? `${precip_mm} mm` : `${precip_in} in`;
    }

    getTemp(temp_c: number, temp_f: number) {
        return this.engine.unit === 'Metric' ? `${temp_c}°C` : `${temp_f}°F`;
    }

    getFeelsLike(feelslike_c: number, feelslike_f: number) {
        return this.engine.unit === 'Metric' ? `${feelslike_c}°C` : `${feelslike_f}°F`;
    }
}