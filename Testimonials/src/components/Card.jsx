import"./Card.css";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


function Card({showData}) {
    const {name,job,image,text}=showData;
  return (
    <div className="Card-First-Div">
        <div className="ImagDiv">
            <img src={image} alt="" />
        </div>
        <div className="name-desgination">
            <h3>{name}</h3>
            <h3>{job}</h3>
            
        </div>
        <div className="symbols-para">
            <FaQuoteLeft className="symbol-left" />
            <p className="para">{text}</p>
            <FaQuoteRight className="symbol-right"/>
        </div>

    </div>
  )
}

export default Card
