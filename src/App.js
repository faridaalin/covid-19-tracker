import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MapboxMap from './components/mapboxMap/MapboxMap';
import Table from './components/table/Table';
import Dashboard from './components/dashboard/Dashboard';
import SearchBar from './components/searchBar/SearchBar';
import Country from './components/country/Country';

import { CountryContext } from './context/SearchedCountryContext';
import './App.css';

const App = () => {
  const [all, setAll] = useState({});
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [country] = useContext(CountryContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get('https://covid19.mathdro.id/api');

        if (request.status !== 200)
          return setError('An error happend, plase try again later.');

        setAll(request.data);
        return request;
      } catch (err) {
        if (err.response.status === 404)
          return setError(err.response.data.message);
        setError('An error happend, plase try again later.');
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        'https://disease.sh/v3/covid-19/countries'
      );

      if (request.status !== 200) {
        console.log('Error happend');
        return;
      }

      setCountries(request.data);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className='container mx-auto flex flex-col justify-center'>
      <SearchBar />
      {country === null || country === '' ? (
        <>
          {' '}
          <Dashboard all={all} />
          <MapboxMap countries={countries} />
          <Table error={error} countries={countries} />
        </>
      ) : (
        <Country />
      )}
    </div>
  );
};

export default App;
