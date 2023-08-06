import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import {GlobalService} from "./services/GlobalService";
import Weather from "./components/Weather";

function App(props: { service: GlobalService }) {
    const [refresh, setRefresh] = React.useState(true);

    const service = props.service;
    service.registerRefresh(refresh, setRefresh);

    useEffect(() => {
        service.getIp().then(
            () => service.getLocationByIp().then(
                () => {
                    service.loading = false;
                }
            )
        );
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
