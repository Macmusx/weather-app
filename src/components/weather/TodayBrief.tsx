import {GlobalService} from "../../services/GlobalService";
import '../../styles/weather/TodayBrief.scss';

export default function TodayBrief(props: { service: GlobalService }) {
    const location = props.service.location;
    const current = props.service.currentForecast;
    if (!location || !current) return <>Something went wrong!</>;

    let image = '';

    if (current.is_day) {
        if (current.condition.code === 1000) image = 'sun.png';
        else if (current.condition.code === 1003) image = 'sunny.png';
        else if (current.condition.code === 1006) image = '';
    } else {
        if (current.condition.code === 1000) image = 'clear_moon.png';
        else if (current.condition.code === 1003) image = 'half-moon.png';
        else if (current.condition.code === 1006) image = '';
    }

    return (<div className="max-w-[10rem] rounded overflow-hidden shadow-lg m-5">
        <>
            <img className="w-[5rem] m-auto mt-3" src={require('../../images/weather/' + image)}
                 alt="Clear Moon"/>
            <div className="font-bold text-4xl text-center mt-4">{current.temp_c}°C</div>
            <div className="text-center">Feels like</div>
            <div className="text-center mb-2">{current.feelslike_c}°C</div>
        </>
    </div>)
}