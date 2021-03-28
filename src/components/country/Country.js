import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Country = ({ country }) => {
  // console.table(country);

  return (
    <article className='max-w-md py-8 my-8 mx-auto'>
      <Doughnut
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
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',

                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={400}
        options={{
          animation: {
            animateScale: true,
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [{ ticks: { beginAtZero: true } }],
          },
        }}
      />
    </article>
  );
};

export default Country;
