
import { dashboardStats } from "../data/mockData";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="subtitle">
        Restaurant overview (sample data)
      </p>

      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
