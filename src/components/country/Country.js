import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import formatDigits from '../../utils/formatDigits';

const Country = ({ country }) => {
  const option = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const currentData = formatDigits(
            data.datasets[0].data[tooltipItem.datasetIndex]
          );

          return `${currentData}`;
        },
        title: function (tooltipItem, data) {
          const currentLabel = data.labels[tooltipItem[0].datasetIndex];
          return currentLabel;
        },
      },
      yPadding: 20,
      xPadding: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  };

  return (
    <article className='max-w-md py-8 my-8 mx-auto'>
      <Doughnut
        options={option}
        data={{
          labels: ['Cases', 'Recovered', 'Deaths', 'Active'],
          datasets: [
            {
              label: '# of votes',
              data: [
                country.cases,
                country.recovered,
                country.deaths,
                country.active,
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
        }}
        height={400}
        width={400}
        // options={{
        //   animation: {
        //     animateScale: true,
        //   },
        //   maintainAspectRatio: false,
        //   scales: {
        //     yAxes: [{ ticks: { beginAtZero: true } }],
        //   },
        // }}
      />
    </article>
  );
};

export default Country;
