import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import formatDigits from '../../utils/formatDigits';

const Country = ({ country }) => {
  // console.log('country', country);

  const DoughnutOptions = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const currentData = formatDigits(
            data.datasets[0].data[tooltipItem.index]
          );
          console.log('currentData', currentData);
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
  const BarOptions = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const currentData = formatDigits(
            data.datasets[0].data[tooltipItem.index]
          );
          console.log('currentData', currentData);
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
    legend: { display: false },
    title: `Current state in `,
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
  console.log('country', country);

  return (
    <article className='max-w-md py-8 my-8 mx-auto'>
      <Doughnut
        options={DoughnutOptions}
        data={DoughnutData}
        height={400}
        width={400}
      />
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths', 'Active'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(242, 234, 0, 0.5)',
              ],
              hoverBackgroundColor: [
                'rgba(0, 77, 153)',
                'rgba(30, 102, 49)',
                'rgba(255, 51, 51)',
                'rgba(204, 153, 0)',
              ],
              data: [
                country.confirmed.value,
                country.recovered.value,
                country.deaths.value,
                country.confirmed.value -
                  (country.recovered.value - country.deaths.value),
              ],
            },
          ],
        }}
        options={BarOptions}
      />
    </article>
  );
};

export default Country;

// legend: { display: false },
