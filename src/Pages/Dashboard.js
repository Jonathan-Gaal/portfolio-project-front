import { UserDashboard } from "../Components/UserComponents/UserDashboard";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">Your Dashboard</div>
      <UserDashboard />
    </div>
  );
};
