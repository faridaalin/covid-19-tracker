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

  console.log('all', all);
  return (
    <div className='dashboard-container'>
      <section>
        <h3>Cases:</h3>
        <p>{all.cases}</p>
      </section>
      <section>
        <h3>Recovered:</h3>
        <p>{all.recovered}</p>
      </section>
      <section>
        <h3>Deaths:</h3>
        <p>{all.deaths}</p>
      </section>
    </div>
  );
};

export default Dashboard;
