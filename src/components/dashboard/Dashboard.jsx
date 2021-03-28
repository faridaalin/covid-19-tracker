import DashboardItem from './DashboardItem';

const Dashboard = ({ all }) => {
  return (
    <div className='dashboardWrapper py-8 my-8'>
      <DashboardItem color='gray' title='Cases' data={all.cases} />
      <DashboardItem color='green' title='Recovered' data={all.recovered} />
      <DashboardItem color='red' title='Deaths' data={all.deaths} />
      <DashboardItem color='blue' title='Active' data={all.active} />
    </div>
  );
};

export default Dashboard;
