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
            service.getIp().then(
                () => {
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

    if (service.loading) return (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );

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
