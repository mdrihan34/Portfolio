import { Outlet } from "react-router-dom"
import DashNav from "./DashNav"


const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
    
<div className=" lg:border-r-2 mr-2">
<DashNav></DashNav>

</div>
      <Outlet></Outlet>
      
    </div>
  )
}

export default Dashboard
