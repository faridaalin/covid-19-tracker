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
            <article className='table-item' key={country.country}>
              <div className='text-left bg-gray-100'>
                {formatDigits(country.country)}
              </div>
              <div className='text-left bg-gray-100'>
                {formatDigits(country.cases)}
              </div>
              <div className='text-left bg-gray-100'>
                {formatDigits(country.recovered)}
              </div>
              <div className='text-left bg-gray-100'>
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
    <section className='table-container'>
      <article className='table-header'>
        <div className='text-left bg-gray-300'>Country</div>
        <div className='text-left bg-gray-300'>Case</div>
        <div className='text-left bg-gray-300'>Recovered</div>
        <div className='text-left bg-gray-300'>Deaths</div>
      </article>
      {displayCountries()}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationContainer'}
        previousClassName={'prevBtn'}
        nextClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </section>
  );
};

export default Table;
