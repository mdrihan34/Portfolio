
import Navbar from'./Navber.jsx'
import Footer from'./Footer.jsx'
import { Outlet } from 'react-router-dom'




const Main = () => {
  return (
    <div>
    <Navbar></Navbar>
     <Outlet></Outlet>
     
     <Footer></Footer>
    </div>
  )
}

export default Main
