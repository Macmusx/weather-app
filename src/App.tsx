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
                () => service.getLocationByIp().then(
                    () => {
                        service.loading = false;
                    }
                )
            );
        } else {
            service.loading = false;
            setRefresh(true);
        }
    }, []);

    if (service.loading) return <div>Loading...</div>;

    return (
        <>
            <Header service={service}/>
            {
                service.location ? (
                    <Weather service={service}/>
                ) : null
            }
        </>
    )
}

export default App;
