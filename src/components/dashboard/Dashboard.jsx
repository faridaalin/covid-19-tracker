import formatDigits from '../../utils/formatDigits';
import './dashboard.css';

const Dashboard = ({ all }) => {
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
