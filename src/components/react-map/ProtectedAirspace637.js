import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const ProtectedAirspace637 = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Create a polygon geometry
            const arTrack = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [-91.8841667, 37.6730556],
                    [-91.0186111, 37.8666667],
                    [-90.7694444, 37.7861111],
                    [-90.8730556, 37.1772222],
                    [-90.9230556, 36.9263889],
                    [-90.9666667, 36.6333333],
                    [-91.0500000, 36.2666667],
                    [-91.3000000, 36.2666667],
                    [-91.8333333, 36.6333333],
                    [-92.0569444, 36.7500000],
                    [-92.0569444, 36.9952778],
                    [-92.0583333, 37.0963889],
                    [-92.4397222, 37.0491667],
                    [-92.5686111, 37.0480556],
                    [-92.7041667, 37.0713889],
                    [-92.8005556, 37.1319444],
                    [-92.8436111, 37.3508333],
                    [-92.7519444, 37.4438889],
                    [-92.6408333, 37.4861111],
                    [-92.5144444, 37.5105556],
                    [-91.9341667, 37.5758333],
                ]
            };
            // Create a simple line symbol for rendering the line in the view
            var trackLine = {
                type: "simple-fill", // autocasts as new SimpleLineSymbol()
                color: [211, 211, 211, 0.4],
                outline: {
                    color: [0, 0, 0], 
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

        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default ProtectedAirspace637;