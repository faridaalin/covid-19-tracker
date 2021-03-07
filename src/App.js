import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from './axios';
import './App.css';

function App() {
  // const [deaths, setDeaths] = useState(0);
  const [countries, setCountries] = useState([]);

  const node = useRef(null);

  const setMarkerSize = (deaths, markerStyles) => {
    if (+deaths > 500000) {
      markerStyles.markerWidth = '80px';
      markerStyles.markerHeight = '80px';

      return markerStyles;
    } else if (+deaths > 100000) {
      markerStyles.markerWidth = '40px';
      markerStyles.markerHeight = '40px';
      return markerStyles;
    } else {
      markerStyles.markerWidth = '15px';
      markerStyles.markerHeight = '15px';
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
      // map.on('mouseenter', function (e) {
      //   map.getCanvas().style.cursor = 'pointer';
      //   console.log('event:', e);
      // });
      // map.on('mouseleave', function () {
      //   map.getCanvas().style.cursor = '';
      //   popup.remove();
      // });

      const marker = document.createElement('div');
      marker.className = 'marker';
      const markerStyles = {
        markerWidth: 0,
        markerHeight: 0,
      };
      const newStyle = setMarkerSize(country.deaths, markerStyles);

      marker.style.width = newStyle.markerWidth;
      marker.style.height = newStyle.markerHeight;

      const addMarker = () => {
        const customMaker = new mapboxgl.Marker(marker);
        const popup = new mapboxgl.Popup({
          // closeButton: false,
          // closeOnClick: false,
        });

        popup.setHTML(
          `<p><strong>Country: ${country.country}</strong></p><p>Cases: ${country.cases}</p>`
        );

        customMaker
          .setLngLat([country.countryInfo.long, country.countryInfo.lat])
          .setPopup(popup)
          .addTo(map);
      };

      map.on('load', addMarker);
    });
  }, [countries]);
  // console.log('sortedByDeaths', sortedByDeaths);

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
