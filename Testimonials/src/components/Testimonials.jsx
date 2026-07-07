import "./Testimonials.css";
import Card from "./Card";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
// import { useState } from "react";


// id={id} name={name} job={job} image={image} text={text}

function Testimonials({data}) {

    // console.log(data.length)
    const [ind,setInd]=useState(0)
    
    function onClickLeftArrow(){
        
        setInd(prev=>{
            return ((prev-1+data.length)%data.length)
        })
        
    }

    function onClickRightArrow(){
        setInd(prev=>{
            return ((prev+1)%data.length)
        })
        
    }

    function onClickSurpriseHandler(){
        setInd((Math.round(Math.random()*10)%data.length))
    }

    let showData=data[ind];

  return (
    <div className="testimonials">
        <Card showData={showData} ></Card>
        <div className="btns">
            <button onClick={onClickLeftArrow} ><IoIosArrowBack/></button>
            <button onClick={onClickRightArrow} ><IoIosArrowForward /></button>
        </div>
        <div>
            <button onClick={onClickSurpriseHandler} className="surpriseMe">Surprise Me!</button>
        </div>
    </div>
  )
}

export default Testimonials;
