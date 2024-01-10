import { UserDashboard } from "../Components/UserComponents/UserDashboard.js";

import { useAuth } from "../Providers/userProvider";

export const Dashboard = () => {
  const { loggedInUserDataFromDB } = useAuth();
  const { firstname } = loggedInUserDataFromDB;

  return (
    <div className="dashboard">
      <div className="header">{firstname}'s Dashboard</div>
      <UserDashboard />
    </div>
  );
};
