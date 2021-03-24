import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const SuprTEK = (props) => {

    const [suprTekGraphic, setSuprTekGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic, LabelClass]) => {

            /*************************
             * Create a point graphic
             *************************/

            // First create a point geometry (this is the location of SuprTEK)
            var point = {
                type: "point", // autocasts as new Point()
                latitude: 38.578690,
                longitude: -89.924450,
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

            const textSymbol = {
                type: 'text', // autocasts as new TextSymbol()
                color: 'white',
                text: 'SuperTEK',
                font: {
                    // autocasts as new Font()
                    size: 12,
                    family: 'Josefin Slab',
                    weight: 'bold',
                }
            };

            const suprTekText = new Graphic({
                // symbol: 
            });
  
            // Create a graphic and add the geometry and symbol to it
            var suprTekGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
            });

            setSuprTekGraphic(suprTekGraphic);
            props.view.graphics.add(suprTekGraphic);
            console.log(props);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(suprTekGraphic);
        };
    }, []);

    return null;

}

export default SuprTEK;