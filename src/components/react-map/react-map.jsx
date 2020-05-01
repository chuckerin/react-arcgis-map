import React, { useState } from 'react'

import { Map } from '@esri/react-arcgis';

import './react-map.css';

const ReactMap = () => {
    const [baseMap, setBaseMap] = useState('streets-navigation-vector');
    const handleChange = (e) => {
        console.log(e.target.value);
        setBaseMap(e.target.value);
    };

    return (
        <div style={{height: '600px', width: '600px'}} >
            <select 
                style={{position: 'absolute', left: '500px', top: '10px', zIndex: '999'}}
                value={baseMap}
                onChange={handleChange}
            >
                <option value='streets-night-vector'>nightime...</option>
                <option value='streets-navigation-vector'>DAYTIME!!!</option>
                <option value='hybrid'>Hybrid</option>
                <option value='streets'>Streets</option>
                <option value='topo'>Topography</option>
                <option value='satellite'>Satellite</option>
            </select>
            <Map 
                mapProperties={{ basemap: baseMap }}
                viewProperties={{
                    center: [-93, 39],
                    zoom: 5
                }}
            />
        </div>
    );
};

export default ReactMap;