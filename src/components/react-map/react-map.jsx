import React from 'react'

import { Map } from '@esri/react-arcgis';

import './react-map.css';

export const ReactMap = (baseMap) => (
    <Map
        mapProperties={{ basemap: 'hybrid' }}
        viewProperties={{
            center: [-93, 39],
            zoom: 5
        }}>
    </Map>
)