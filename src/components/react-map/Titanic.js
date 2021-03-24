import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Titanic = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {

            /*************************
             * Create a point graphic
             *************************/

            // First create a point geometry (this is the location of the Titanic)
            var point = {
                type: "point", // autocasts as new Point()
                longitude: -49.97,
                latitude: 41.73
            };
  
            // Create a symbol for drawing the point
            var markerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [245, 66, 66],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [245, 200, 66],
                    width: 3
                }
            };
  
            // Create a graphic and add the geometry and symbol to it
            var graphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
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

export default Titanic;