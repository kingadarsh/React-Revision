
import { useState } from "react"
function ReadMore(props){

    const [isExpanded,setIsExpanded]=useState(false);

    if(props.text.length<=props.maxCharCount){
        return <p>{props.text}</p>
    }

    const displayText=isExpanded?props.text:props.text.slice(0,props.maxCharCount)

    return (
        <>
            <p>
                {displayText}

                <button 
                    onClick={()=>{setIsExpanded(prev=>!prev)}}
                >
                    {isExpanded?"Read Less":"Read More..."}
                </button>
            </p>

            
        </>
    );
};


export default ReadMore;