import React, { useEffect, useState } from 'react';
import axios from './axios';
import MapboxMap from './components/mapboxMap/MapboxMap';
import Table from './components/table/Table';
import Dashboard from './components/dashboard/Dashboard';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';

const App = () => {
  const [all, setAll] = useState({});
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all');

      if (request.status !== 200) {
        console.log('Error happend');
        return;
      }

      setAll(request.data);
      return request;
    }

    fetchData();
  }, []);

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

  return (
    <div className='container'>
      <SearchBar />
      <Dashboard all={all} />
      <MapboxMap countries={countries} />
      <Table countries={countries} />
    </div>
  );
};

export default App;
