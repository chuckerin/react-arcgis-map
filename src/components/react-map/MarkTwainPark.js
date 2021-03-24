import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const MarkTwainPark = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {

            const textSymbol = {
                type: "text",
                color: "black",
                font: {
                    size: 12,
                    family: 'Arial',
                    weight: 'bold'
                }
            };

            const mapLabel = {
                symbol: textSymbol,
                labelPlacement: "above-right",
                labelExpressionInfo: {
                    expression: 'DefaultValue($feature.FOURCHARID, "----")'
                }
            }

            // Create a polygon geometry
            const polygon = {
                type: "polyline", // autocasts as new Polyline()
                paths: [
                    [-90.933334, 37.605],   // Entry Point
                    [-91.148333, 37.446667],  // Entry Point
                    [-90.933334, 37.605],  // Initial Point
                    [-91.14833, 37.446667],  // Initial Point
                    [-92.498333, 37.44],  // Anchor Nav Point
                    [-92.498333, 37.44], // Anchor Pattern
                    [-92.441667, 37.116667], // Anchor Pattern
                    [-91.406667, 37.225], // Anchor Pattern
                    [-91.4625, 37.553333],  // Anchor Pattern
                    [-91.406667, 37.225],  // Exit Points
                    [-91.4625, 37.553333] // Exit Points                       
                ]
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

export default MarkTwainPark;