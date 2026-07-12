import { Outlet,NavLink } from "react-router-dom";
import './MainDisplayComponent.css'
function MainDisplayComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <NavLink to='/'>Home</NavLink>
      <br />
      <NavLink to='/about'>About</NavLink>
      <br />
      <NavLink to='/support'>Support</NavLink>

      <Outlet/>
    </div>
  )
}

export default MainDisplayComponent;
