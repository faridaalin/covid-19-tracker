import React, { useState, useEffect, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from '../../axios';
import { CountryContext } from '../../context/SearchedCountryContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [, setCountry] = useContext(CountryContext);

  useEffect(() => {
    async function fetchData() {
      if (!searchTerm || searchTerm.trim().length < 2) return;
      try {
        const request = await axios.get(`/countries/${searchTerm}`);
        if (request.status !== 200) {
          console.log('Error happend');
          return;
        }

        setCountry(request.data);
        return request;
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [searchTerm, setCountry]);

  const handleCountry = (event) => {
    if (
      setSearchTerm === null ||
      searchTerm === '' ||
      searchTerm === undefined
    ) {
      setCountry(null);
    }
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor='search'>Search by country:</label>

      <DebounceInput
        type='search'
        id='search'
        name='search'
        aria-label='Search by country'
        placeholder='F.eks Norway'
        minLength={2}
        debounceTimeout={300}
        onChange={handleCountry}
      />

      <button onClick={handleCountry}>Search</button>
    </div>
  );
};

export default SearchBar;
