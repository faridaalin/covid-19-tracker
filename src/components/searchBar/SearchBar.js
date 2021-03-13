import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <label htmlFor='search'>Search by country:</label>
      <input
        type='search'
        id='search'
        name='search'
        aria-label='Search by country'
        placeholder='F.eks Norway'
      />

      <button>Search</button>
    </div>
  );
};

export default SearchBar;
