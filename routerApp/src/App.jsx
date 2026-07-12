import {Routes,Route,NavLink} from 'react-router-dom';
import MainDisplayComponent from './components/MainDisplayComponent';
import HomePage from './components/HomePage';
import SupportPage from './components/SupportPage';
import About from './components/About';

function App() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<MainDisplayComponent/>}>
                <Route index element={<HomePage/>} />
                <Route path='about' element={<About/>}/>
                <Route path='support' element={<SupportPage/>}/>
                <Route path='*' element={<div>Nothing to show</div>}/>
            </Route>
                
      </Routes>
    </div>
  )
}

export default App
