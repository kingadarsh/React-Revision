import './App.css';
import {Routes,Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

import NavBar from './components/NavBar';

function App() {
    return (
        <div>
            <NavBar/>

            
            <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='*' element={<div>You are on the wrong route</div>}/>

                
            </Routes>
            

        </div>
    )
}

export default App
