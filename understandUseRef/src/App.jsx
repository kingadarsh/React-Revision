import './App.css';
import ReferencingDomElement from './components/ReferencingDomElement';
import ReferencingValue from './components/ReferencingValue';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';

function App() {
    


  return (
    <div>

        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path='/referencing-dom-element' element={<ReferencingDomElement/>} />
                <Route path='/referencing-value' element={<ReferencingValue/>} />
            </Route>
        </Routes>
        

        

        
    </div>
  )
}

export default App
