import { NavLink, useNavigate } from "react-router-dom"


function HomePage() {
    const navigate=useNavigate();
    function onClickNavigate(){
        navigate('/about')
    }
  return (
    <div>
      This is home page
      <br />
      <button onClick={onClickNavigate}>Go to About</button>
      
    </div>
  )
}

export default HomePage
