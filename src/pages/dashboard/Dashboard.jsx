import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  




  return (
    <>
      
      <div className="container">
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-md-3 p-5 border mt-5">
            <Sidebar />
          </div>
          <div className="col-md-9 p-5 w-75">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
