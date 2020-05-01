import React from 'react';
import ReactDOM from 'react-dom';
// import { setDefaultOptions } from 'esri-loader';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// configure esri-loader to lazy load the CSS
// the fisrt time any react-arcgis components are rendered
// setDefaultOptions({ css: true });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
