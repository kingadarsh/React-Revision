import{NavLink, Outlet} from "react-router-dom";

function Home() {
  return (
    <div>
        <h1>Select Wisely this is the practical demonstration of useRefs</h1>
        <div>
            <NavLink to="/referencing-dom-element">
            <button>Referencing Dom Element</button>
            </NavLink>
            <NavLink to="/referencing-value">
            <button>Referencing Value</button>
            </NavLink>
        </div>

        <Outlet/>
    </div>
  )
}

export default Home
