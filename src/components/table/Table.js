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
          console.log(country);
          return (
            <article className='table-item' key={country.country}>
              <div>{formatDigits(country.country)}</div>
              <div>{formatDigits(country.cases)}</div>
              <div>{formatDigits(country.recovered)}</div>
              <div>{formatDigits(country.deaths)}</div>
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
        <div>Country</div>
        <div>Case</div>
        <div>Recovered</div>
        <div>Deaths</div>
      </article>
      {displayCountries()}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousClassName={'prevBtn'}
        nextClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </section>
  );
};

export default Table;
