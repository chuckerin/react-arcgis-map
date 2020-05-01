import React from 'react'

import { Map } from '@esri/react-arcgis';

import './react-map.css';

const ReactMap = (baseMap) => {
    console.log('react-map => ' + baseMap.baseMap);
    return <Map
        mapProperties={{ basemap: baseMap.baseMap }}
        viewProperties={{
            center: [-93, 39],
            zoom: 5
        }}/>
};

export default ReactMap;