import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import formatDigits from '../../utils/formatDigits';

const Table = ({ countries }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const countriesPerPage = 10;
  const countriesVisited = pageNumber * countriesPerPage;

  const displayCountries = () => {
    const countriesToDisplay =
      countries &&
      countries
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

  return (
    <section className='table-container w-96 max-w-3xl'>
      <article className='table-header py-4 px-7 bg-gray-300'>
        <div className='text-left'>Country</div>
        <div className='text-left'>Case</div>
        <div className='text-left'>Recovered</div>
        <div className='text-left'>Deaths</div>
      </article>
      {displayCountries()}
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
