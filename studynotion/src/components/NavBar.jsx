import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg'


function NavBar() {

    const navigate=useNavigate();

    function onClickLogin(){
        navigate('/login')
    }

    function onClickSignup(){
        navigate('/signup')
    }

  return (
    <div className='NavDiv'>
        <div>
            <NavLink to="/" className="StudyNotionLogo" >
                <img src={Logo} alt="Study-Notion-Logo" />
            </NavLink>
        </div>

        <div className='NavCenterList'>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/">
                    <li>About</li>
                </NavLink>
                <NavLink to="/">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>

        <div className='NavBtn'>
            <div>
                <button onClick={onClickLogin}>Log In</button>
            </div>

            <div>
                <button onClick={onClickSignup}>Sign Up</button>
            </div>            
        </div>

    </div>
  )
}
export default NavBar
    