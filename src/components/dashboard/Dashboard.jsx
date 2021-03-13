import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './dashboard.css';

const Dashboard = ({ title, content }) => {
  const [all, setAll] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all');

      if (request.status !== 200) {
        console.log('Error happend');
        return;
      }

      setAll(request.data);
      return request;
    }

    fetchData();
  }, []);

  const formatDigits = (digit) => {
    let number = digit;
    return (
      number && number.toLocaleString({ undefined, minimumFractionDigits: 2 })
    );
  };

  return (
    <div className='dashboard-container'>
      <section>
        <h3>Cases:</h3>
        <p>{formatDigits(all.cases)}</p>
      </section>
      <section>
        <h3>Recovered:</h3>
        <p>{formatDigits(all.recovered)}</p>
      </section>
      <section>
        <h3>Deaths:</h3>
        <p>{formatDigits(all.deaths)}</p>
      </section>
      <section>
        <h3>Active:</h3>
        <p>{formatDigits(all.active)}</p>
      </section>
    </div>
  );
};

export default Dashboard;
