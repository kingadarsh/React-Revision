import { useState,useEffect } from "react"
import { useRef } from "react"
import {useNavigate} from 'react-router-dom';

function ReferencingValue() {
    const [val,setVal]=useState(0);
    const intervalRef=useRef(null);

    function onClickStartClockHandler(){
        if (intervalRef.current !== null) {
            console.log("Clock is already running");
            return;
        }
        intervalRef.current=setInterval(()=>{
            setVal(v=>v+1);
        },1000);
        console.log("From start")
        console.log( intervalRef.current)
    }

    function onClickStopClockHandler(){
        if (intervalRef.current === null) {
            console.log("No interval is running");
            return;
        }
        clearInterval(intervalRef.current);
        console.log("From stop")
        console.log( intervalRef.current)
        intervalRef.current = null;
    }
    useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        console.log("Component Unmounted → Interval Cleared");
      }
    };
  }, []);

    const navigate=useNavigate();

  return (
    <div>
        <center>
            <h1>Referencing Values Using useRef</h1>
                        <br /><br />
            <button onClick={()=>navigate(-1)} >Back</button>
                            
            <h1>Clock App</h1>
            <h1 style={{color:"black", background:"grey", width:"50px", borderRadius:"50%"} }>{val}</h1>

                <div>
                    <button onClick={onClickStartClockHandler}>Start</button>
                    <button onClick={onClickStopClockHandler}> Stop</button>
                </div>
        </center>

    </div>
  )
}

export default ReferencingValue
