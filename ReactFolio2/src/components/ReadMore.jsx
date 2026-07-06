import { useState } from "react";
import "./ReadMore.css";


function ReadMore({description}) {
    // let desc=description;
    const [isExtended,setIsExtended]=useState(false);

    function onClickHandler(){
        setIsExtended(prev=>!prev);
    }
    return (
        <div className="read-more">
            {isExtended?description:description.slice(0,150)}
            <button className="read-more-btn" onClick={onClickHandler}>{isExtended?"Show Less":"...Show More"}</button>
        </div>
    )
}

export default ReadMore;