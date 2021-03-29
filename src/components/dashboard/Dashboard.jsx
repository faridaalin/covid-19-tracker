import DashboardItem from './DashboardItem';
import dateFormat from 'dateformat';

const Dashboard = ({ all }) => {
  return (
    <article className='py-8 my-8'>
      <section>
        Updated: {dateFormat(all.lastUpdate, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
      </section>
      <div className='dashboardWrapper '>
        <DashboardItem
          color='gray'
          title='Confirmed'
          data={all.confirmed?.value}
        />
        <DashboardItem
          color='green'
          title='Recovered'
          data={all.recovered?.value}
        />
        <DashboardItem color='red' title='Deaths' data={all.deaths?.value} />
        <DashboardItem
          color='blue'
          title='Active'
          data={
            all.confirmed?.value - (all.recovered?.value + all.deaths?.value)
          }
        />
      </div>
    </article>
  );
};

export default Dashboard;
