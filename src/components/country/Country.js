import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import formatDigits from '../../utils/formatDigits';
import { CountryContext } from '../../context/SearchedCountryContext';

const Country = () => {
  const [country] = useContext(CountryContext);
  
  const DoughnutOptions = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const currentData = formatDigits(
            data.datasets[0].data[tooltipItem.index]
          );

          return `${currentData}`;
        },
        title: function (tooltipItem, data) {
          const currentLabel = data.labels[tooltipItem[0].index];
          return currentLabel;
        },
      },
      yPadding: 20,
      xPadding: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      animation: {
        animateScale: true,
      },
    },
  };

  const DoughnutData = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],

    datasets: [
      {
        label: 'Daily numbers',
        data: [
          country.confirmed.value,
          country.recovered.value,
          country.deaths.value,
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(75, 192, 192, 0.4)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',

          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 206, 86, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <article className='my-8 mx-auto flex justify-between items-center'>
      <div className='chart-container  mx-8'>
        <Doughnut
          width={400}
          height={400}
          options={DoughnutOptions}
          data={DoughnutData}
        />
      </div>
    </article>
  );
};

export default Country;
