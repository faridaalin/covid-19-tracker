import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from './axios';
import './App.css';

function App() {
  const [deaths, setDeaths] = useState(0);
  const [countries, setCountries] = useState([]);

  const node = useRef(null);

  const setMarkerSize = (deaths, markerStyles) => {
    // console.log(+deaths);
    // console.log(+deaths > 500000);
    if (+deaths > 500000) {
      markerStyles.markerWidth = '80px';
      markerStyles.markerHeight = '80px';

      return markerStyles;
    } else if (+deaths > 250000) {
      markerStyles.markerWidth = '40px';
      markerStyles.markerHeight = '40px';
      return markerStyles;
    } else {
      markerStyles.markerWidth = '20px';
      markerStyles.markerHeight = '20px';
      return markerStyles;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/countries');

      if (request.status !== 200) {
        console.log('Error happend');
        return;
      }

      setCountries(request.data);
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [5, 34],
      zoom: 1,
    });

    const sorted = countries.sort((a, b) => (+a.deaths < +b.deaths ? 1 : -1));

    sorted.forEach((country) => {
      const marker = document.createElement('div');
      marker.className = 'marker';
      const markerStyles = {
        markerWidth: 0,
        markerHeight: 0,
      };
      const newStyle = setMarkerSize(country.deaths, markerStyles);
      // console.log('newStyle', newStyle);

      marker.style.width = newStyle.markerWidth;
      marker.style.height = newStyle.markerHeight;
      console.log(country.deaths);

      new mapboxgl.Marker(marker)
        .setLngLat([country.countryInfo.long, country.countryInfo.lat])
        .addTo(map);
    });
  }, [countries]);

  // console.log(
  //   'COUNTRIES:',
  //   countries.forEach((country) => console.log(country.countryInfo))
  // );
  return (
    <div className='map-wrapper'>
      <div className='map-container'>
        <div
          ref={node}
          className='map'
          style={{ heigt: '400px', wight: '400px' }}
        ></div>
      </div>
    </div>
  );
}

export default App;
