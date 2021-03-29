import React, { useContext } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import formatDigits from '../../utils/formatDigits';
import { CountryContext } from '../../context/SearchedCountryContext';
import styles from './Chart.module.css';

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
    <div className={styles.container}>
      <Doughnut
        width={400}
        height={400}
        options={DoughnutOptions}
        data={DoughnutData}
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
                  (country.recovered.value + country.deaths.value),
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state` },
        }}
      />
    </div>
  );
};

export default Country;
