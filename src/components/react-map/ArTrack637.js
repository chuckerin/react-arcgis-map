import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const ArTrack637 = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Create a polygon geometry
            const arTrack = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [-92.498333, 37.44], // Anchor Pattern
                    [-92.441667, 37.116667], // Anchor Pattern
                    [-91.406667, 37.225], // Anchor Pattern
                    [-91.4625, 37.553333],  // Anchor Pattern
                ]
            };
            // Create a simple line symbol for rendering the line in the view
            var trackLine = {
                type: "simple-fill", // autocasts as new SimpleLineSymbol()
                // color: [255, 207, 158, 0.2],
                outline: {
                    color: [226, 119, 40], // orange
                    width: 1
                }
            };       
            // Add the geometry and symbol to a new graphic
            const graphic1 = new Graphic({
                geometry: arTrack,
                symbol: trackLine,
            });

            setGraphic(graphic1);
            props.view.graphics.add(graphic1);

        //     const entryPoint1 = {
        //         type: "polyline", // autocasts as new Polyline()
        //         paths: [
        //             [-90.933334, 37.605],  // Initial Point
        //             [-91.4625, 37.553333],  // WE need to calculate this point as the closest to the Initial Point
        //         ]
        //     };

        //       // Create a simple line symbol for rendering the line in the view
        //       var entryLine = {
        //         type: "simple-line", // autocasts as new SimpleLineSymbol()
        //         style: "dash",
        //         color: [128, 128, 128], // RGB color values as an array	
        //         width: 2
        //     };       
        //   // Add the geometry and symbol to a new graphic
        //     const graphic2 = new Graphic({
        //         geometry: entryPoint1,
        //         symbol: entryLine,
        //     });
        //     setGraphic(graphic2);
        //     props.view.graphics.add(graphic2);

        //     const entryPoint2 = {
        //         type: "polyline", // autocasts as new Polyline()
        //         paths: [
        //             [-91.14833, 37.446667],  // Initial Point
        //             [-91.406667, 37.225],  // WE need to calculate this point as the closest to the Initial Point
        //         ]
        //     };

        //   // Add the geometry and symbol to a new graphic
        //     const graphic3 = new Graphic({
        //         geometry: entryPoint2,
        //         symbol: entryLine,
        //     });
        //     setGraphic(graphic3);
        //     props.view.graphics.add(graphic3);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default ArTrack637;