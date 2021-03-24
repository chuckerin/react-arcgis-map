import React, { useState, useContext } from 'react'

import { Map } from '@esri/react-arcgis';

import './react-map.css';
import SuprTEK from './SuprTEK';
import BermudaTriangle from './BermudaTriangle';
import Titanic from './Titanic';
import MyFeatureLayer from './MyFeatureLayer';
import MarkTwainPark from './MarkTwainPark';
import ArTrack637 from './ArTrack637';
import KeystonePipeline from './KeystonePipline';
import ProtectedAirspace637 from './ProtectedAirspace637';
import ArTrack637Points from './ArTrack637Points';
import ArTrack637Staple from './ArTrack637Staple';
import UsAfricom from './UsAfricom';
import UsNorthcom from './UsNorthcom';
import UsSouthcom from './UsSouthcom';
// import UsCentcom from './UsCentcom';
// import UsPacom from './UsPacom';


const ReactMap = (props) => {
    const [baseMap, setBaseMap] = useState('topo');
    const handleChange = (e) => {
        setBaseMap(e.target.value);
        console.log(e.target.value);
    };

    const [zoomLevel, setZoomLevel] = useState(7);
    const changeZoomLevel = (evt) => {
        setZoomLevel(evt.target.value)
        console.log(`zoom level => ${zoomLevel}`);
    }

    const mapProps = { 
        basemap: baseMap 
    };
    const viewProps = {
        center: [-91.8, 37],
        zoom: zoomLevel
    };

    return (
        <div style={{height: '100vh', width: '100vw'}} >
            <select 
                style={{position: 'absolute', right: '50px', top: '10px', zIndex: '999'}}
                value={baseMap}
                onChange={handleChange}
            >
                <option value='streets-night-vector'>nightime...</option>
                <option value='streets-navigation-vector'>DAYTIME!!!</option>
                <option value='hybrid'>Hybrid</option>
                <option value='streets'>Streets</option>
                <option value='topo'>Topography</option>
                <option value='topo-vector'>Topography-Vector</option>
                <option value='satellite'>Satellite</option>
            </select>
            <select 
                style={{position: 'absolute', right: '200px', top: '10px', zIndex: '999'}}
                value={zoomLevel}
                onChange={changeZoomLevel}
            >
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
            </select>
            <Map 
                mapProperties={mapProps}
                viewProperties={viewProps}
            >
                {/* <SuprTEK /> */}
                {/* <Titanic /> */}
                {/* <BermudaTriangle /> */}
                <MarkTwainPark />
                <UsAfricom />
                <UsNorthcom />
                <UsSouthcom />
                {/* <UsCentcom />
                <UsPacom /> */}

                <ArTrack637Points />
                {/* <ArTrack637Staple /> */}
                {/* <ArTrack637 /> */}
                <ProtectedAirspace637 />
                {/* <KeystonePipeline /> */}
                {/* <MyFeatureLayer 
                    featureLayerProperties={{
                        url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Time_Zones/FeatureServer/0'
                    }}
                /> */}
            </Map>
        </div>
    );
};

export default ReactMap;