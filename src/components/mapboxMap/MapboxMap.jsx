import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from '../../axios';

const MapboxMap = () => {
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

    const addMarker = () => {
      sorted.forEach((country) => {
        const marker = document.createElement('div');
        marker.className = 'marker';
        const markerStyles = {
          markerWidth: 0,
          markerHeight: 0,
        };

        const newStyle = setMarkerSize(country.deaths, markerStyles);

        marker.style.width = newStyle.markerWidth;
        marker.style.height = newStyle.markerHeight;

        const popup = new mapboxgl.Popup({
          offset: [0, -7],
          closeButton: false,
          closeOnClick: false,
        }).setHTML(
          `<p><strong>Country: ${country.country}</strong></p><p>Cases: ${country.cases}</p><p>Deaths:${country.deaths}</p><p>Recovered:${country.recovered}</p>`
        );

        marker.addEventListener('mouseenter', () => popup.addTo(map));
        marker.addEventListener('mouseleave', () => popup.remove());

        new mapboxgl.Marker(marker)
          .setLngLat([country.countryInfo.long, country.countryInfo.lat])
          .setPopup(popup)
          .addTo(map);
      });
    };
    map.on('load', addMarker);
  }, [countries]);
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
};

export default MapboxMap;
