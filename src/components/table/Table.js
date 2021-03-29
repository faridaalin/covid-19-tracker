import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import formatDigits from '../../utils/formatDigits';

const Table = ({ error, countries }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const [sortCountries, setSortCountries] = useState(null);

  useEffect(() => {
    let arrayCopy = JSON.parse(JSON.stringify(countries));

    setSortCountries(arrayCopy);
  }, [countries]);

  const countriesPerPage = 10;
  const countriesVisited = pageNumber * countriesPerPage;

  const displayCountries = (allCountries) => {
    const countriesToDisplay =
      allCountries &&
      allCountries
        .slice(countriesVisited, countriesVisited + countriesPerPage)
        .map((country) => {
          return (
            <article
              className='table-item px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm'
              key={country.country}
            >
              <div className='text-left  py-4 px-2 flex items-center'>
                {formatDigits(country.country)}
              </div>
              <div className='text-left  py-4 px-2 flex items-center'>
                {formatDigits(country.cases)}
              </div>
              <div className='text-left py-4 px-2 flex items-center'>
                {formatDigits(country.recovered)}
              </div>
              <div className='text-left  py-4 px-2 flex items-center'>
                {formatDigits(country.deaths)}
              </div>
            </article>
          );
        });

    return countriesToDisplay;
  };

  const pageCount = Math.ceil(countries.length / countriesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const sortByName = (e) => {
    const sorted = countries
      .slice()
      .sort((a, b) =>
        a.country.localeCompare(b.country, 'es', { sensitivity: 'base' })
      );
    setSortCountries(sorted);
  };
  const sortByCase = (e) => {
    const sorted = countries.slice().sort((a, b) => b.cases - a.cases);
    setSortCountries(sorted);
  };
  const sortByRecovered = (e) => {
    const sorted = countries.slice().sort((a, b) => b.recovered - a.recovered);
    setSortCountries(sorted);
  };
  const sortByDeaths = (e) => {
    const sorted = countries.slice().sort((a, b) => b.deaths - a.deaths);
    setSortCountries(sorted);
  };

  return (
    <section className='table-container w-96 max-w-3xl'>
      {error ? <div className='py-2 '>{error}</div> : ''}
      <article className='table-header py-4 px-7 bg-gray-300'>
        <div className='text-left cursor-pointer' onClick={sortByName}>
          Country
        </div>
        <div className='text-left cursor-pointer' onClick={sortByCase}>
          Case
        </div>
        <div className='text-left cursor-pointer' onClick={sortByRecovered}>
          Recovered
        </div>
        <div className='text-left cursor-pointer' onClick={sortByDeaths}>
          Deaths
        </div>
      </article>
      {displayCountries(sortCountries)}
      <ReactPaginate
        previousLabel='Previous'
        nextLabel='Next'
        containerClassName='paginationContainer'
        previousClassName='prevBtn'
        nextClassName='nextBtn'
        disabledClassName='paginationDisabled'
        activeClassName='paginationActive'
        pageCount={pageCount}
        onPageChange={changePage}
      />
    </section>
  );
};

export default Table;
