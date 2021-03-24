import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const KeystonePipeline = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic', "esri/symbols/SimpleLineSymbol", "esri/symbols/LineSymbolMarker"]).then(([Graphic, SimpleLineSymbol, LineSymbolMarker]) => {
            // Create a polygon geometry
            const polygon = {
                type: "polyline", // autocasts as new Polyline()
                paths: [[-111.3, 52.68], [-98, 49.5], [-93.94, 29.89]]
            };

            // Create a simple line symbol for rendering the line in the view
            var lineSymbol = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: [226, 119, 40], // RGB color values as an array
                width: 4
            };

            var lineAtt = {
                Name: "Keystone Pipeline", // The name of the pipeline
                Owner: "TransCanada", // The owner of the pipeline
                Length: "3,456 km" // The length of the pipeline
              };

            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: lineSymbol,
                attributes: lineAtt
            });
            setGraphic(graphic);
            props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default KeystonePipeline;