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
            case 1006:
                return day ? 'cloudy.png' : 'cloudy-night.png';
            case 1009:
                return day ? "cloudy.png" : 'cloudy.png';
            case 1030:
                return day ? 'mist.png' : 'mist.png';
            case 1063:
                return day ? 'drop.png' : 'rainy-night.png';
            case 1183:
                return day ? 'light-rain.png' : 'light-rain.png';
            case 1189:
                return day ? 'water.png' : 'rainy.png';
            case 1195:
                return day ? 'heavy-rain.png' : 'heavy-rain-night.png';
            case 1258:
                return day ? 'snowflake.png' : 'snowflake.png';
            default:
                console.log(code);
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