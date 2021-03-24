import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const ArTrack637Points = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Anchor Nav Point, Anchor Pattern *************************************************************************
            var markerSymbol1 = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: "orange",
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: "yellow",
                    width: 3
                }
            };            
            var point1 = {
                type: "point",  
                longitude: -92.498333,
                latitude: 37.44
            };
            const graphic1 = new Graphic({
                geometry: point1,
                symbol: markerSymbol1,
            });
            setGraphic(graphic1);
            props.view.graphics.add(graphic1);


            // Anchor Pattern ********************************************************************************
            var markerSymbol2 = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: "orange",
                outline: {
                    color: "yellow",
                    width: 3
                }
            };            
            var point2 = {
                type: "point", 
                longitude: -92.441667,  
                latitude: 37.116667
            };
            const graphic2 = new Graphic({
                geometry: point2,
                symbol: markerSymbol2,
            });
            setGraphic(graphic2);
            props.view.graphics.add(graphic2);


            // Anchor Pattern, Exit point ********************************************************************************
            var markerSymbol3 = {
                type: "simple-marker",
                color: [255, 128, 0], // orange
                outline: {
                    color: [255, 0, 0], // red
                    width: 3
                }
            };            
            var point3 = {
                type: "point", // autocasts as new Point()
                longitude: -91.406667,
                latitude: 37.225
            };
            const graphic3 = new Graphic({
                geometry: point3,
                symbol: markerSymbol3,
            });
            setGraphic(graphic3);
            props.view.graphics.add(graphic3);
           

            // Anchor Pattern, Exit point ********************************************************************************
            var markerSymbol4 = {
                type: "simple-marker",
                color: [255, 128, 0], // orange
                outline: {
                    color: [255, 0, 0], // red
                    width: 3
                }
            };            
            var point4 = {
                type: "point", // autocasts as new Point()
                longitude: -91.4625,
                latitude: 37.553333
            };
            const graphic4 = new Graphic({
                geometry: point4,
                symbol: markerSymbol4,
            });
            setGraphic(graphic4);
            props.view.graphics.add(graphic4);
            

            // Entry Point, Initial point ********************************************************************************
            var markerSymbol5 = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: "blue",  // Blue
                outline: {
                    color: "green", // Green
                    width: 3
                }
            };            
            var point5 = {
                type: "point", // autocasts as new Point()
                longitude: -90.933334,
                latitude: 37.605
            };
            const graphic5 = new Graphic({
                geometry: point5,
                symbol: markerSymbol5,
            });
            setGraphic(graphic5);
            props.view.graphics.add(graphic5);
            

            // Entry Point, Initial point ********************************************************************************
            var markerSymbol6 = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: "blue",  // Blue
                outline: {
                    color: "green", // Green
                    width: 3
                }
            };            
            var point6 = {
                type: "point", // autocasts as new Point()
                longitude: -91.14833,
                latitude: 37.446667
            };
            const graphic6 = new Graphic({
                geometry: point6,
                symbol: markerSymbol6,
            });
            setGraphic(graphic6);
            props.view.graphics.add(graphic6);
            
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default ArTrack637Points;