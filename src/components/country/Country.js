import React from 'react';
import { Chart } from 'react-google-charts';

const Country = ({ country }) => {
  console.table('country', country);
  console.table('country.country', country.country);
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['Covi-19 data', 'Percentage'],
        ['Infected', country.cases],
        ['Deaths', country.deaths],
        ['Recovered', country.recovered],
        ['Active', country.active],
        ['Infected Today', country.todayCases],
      ]}
      options={{
        title: 'Covid-19 data',
        // Just add this option
        is3D: true,
        pieSliceText: 'value',
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  );
};

export default Country;
