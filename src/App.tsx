import React, {useEffect} from 'react';
import './App.css';
import Weather from "./components/Weather";
import Header from "./components/header/Header";
import {GlobalService} from "./classes/GlobalService";

function App(props: { service: GlobalService }) {
    const [refresh, setRefresh] = React.useState(true);

    const service = props.service;
    service.registerRefresh(refresh, setRefresh);

    useEffect(() => {
        if (service.loadCurrentLocationOnStart) {
            console.log('Loading current location...')
            service.getIp().then(
                () => {
                    console.log('Current location loaded; refreshing.')
                    if (!service.setRefresh) return;
                    service.loading = false;
                    service.setRefresh(!service.refresh);
                }
            );
        } else {
            if (!service.setRefresh) return;
            service.loading = false;
            service.setRefresh(true);
        }
    }, []);

    if (service.loading) return <div>Loading...</div>;

    return (
        <>
            <Header service={service}/>
            {
                service.currentForecast ? (
                    <Weather service={service}/>
                ) : null
            }
        </>
    )
}

export default App;
