import React, { useState, useEffect, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import { CountryContext } from '../../context/SearchedCountryContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [, setCountry] = useContext(CountryContext);

  useEffect(() => {
    setSearchError(null);
    async function fetchData() {
      setSearchError(null);
      if (!searchTerm || searchTerm.trim().length < 2) return;
      try {
        const request = await axios.get(
          `https://covid19.mathdro.id/api/countries/${searchTerm}`
        );

        if (request.status !== 200)
          return setSearchError('An error happend, plase try again later.');
        setCountry(request.data);
        return request;
      } catch (err) {
        if (err.response.status === 404)
          return setSearchError(err.response.data.message);

        setSearchError('An error happend, plase try again later.');
      }
    }

    fetchData();
  }, [searchTerm, setCountry]);

  const handleCountry = (event) => {
    if (event.target.value.length === 0 || event.target.value === '') {
      setCountry(null);
    }
    setSearchTerm(event.target.value);
  };

  return (
    <div className='h-12 mt-5 w-96 max-w-md mx-auto'>
      <DebounceInput
        type='search'
        id='search'
        name='search'
        aria-label='Search by country'
        placeholder='Search by country name'
        minLength={2}
        debounceTimeout={300}
        onChange={handleCountry}
        className='h-full px-2 w-3/5 border-2 border-gray-300 transition-all rounded-md placeholder-gray-300 focus:outline-none focus:shadow-outline shadow-sm'
      />

      <button
        className='ml-1 w-3/12 border-2 border-gray-300 text-black rounded-md px-4 h-full transition duration-500 ease select-none hover:bg-gray-800  hover:border-gray-800 focus:outline-none focus:shadow-outline hover:text-white text-sm'
        onClick={handleCountry}
      >
        Search
      </button>
      {searchError ? <div className='py-2 '>{searchError}</div> : ''}
    </div>
  );
};

export default SearchBar;
