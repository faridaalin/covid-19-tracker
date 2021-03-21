import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import mapboxgl from 'mapbox-gl';
import { CountryProvider } from './context/SearchedCountryContext';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

ReactDOM.render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
