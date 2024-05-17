
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard-main">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-mainbar">
         <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
