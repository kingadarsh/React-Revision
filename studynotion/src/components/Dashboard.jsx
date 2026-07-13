import './Dashboard.css';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div>
        <div>
            Dashboard Page
        </div>
      <Outlet/>
    </div>
  )

}


export default Dashboard
