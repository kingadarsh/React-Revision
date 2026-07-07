
import "./App.css";
import Testimonials from "./components/Testimonials";
import TopHeaders from "./components/TopHeaders";
import { data } from "./assets/data";

export default function App() {
    
  return (
    <div className="Appjs">
        <TopHeaders></TopHeaders>
        <Testimonials data={data}></Testimonials>
    </div>
  )
}
