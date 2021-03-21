import DashboardItem from './DashboardItem';

const Dashboard = ({ all }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      <DashboardItem color='gray' title='Cases' data={all.cases} />
      <DashboardItem color='green' title='Recovered' data={all.recovered} />
      <DashboardItem color='red' title='Deaths' data={all.deaths} />
      <DashboardItem color='blue' title='Active' data={all.active} />
    </div>
  );
};

export default Dashboard;
