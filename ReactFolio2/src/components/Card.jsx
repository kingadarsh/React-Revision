import { useState } from "react";
import "./Card.css";
import ReadMore from "./ReadMore";
import { toast } from "react-toastify";


function Card({course}){
    const {title,description,image:{url,alt}}=course;
    
    

    const [isLiked,setIsLiked]=useState(false);

    function onLikeBtnClick(){
        const newValue=!isLiked;

        setIsLiked(newValue);
        newValue?toast.success(`${title} Course liked!`):toast.warning(`${title} Course unliked!`)
        ;
    }
    

    return (
        <>
            <div className="card-setup">
                <div className="image-container">
                    <img className="card-img" src={url} alt={alt} />

                    <button
                        onClick={onLikeBtnClick}
                        className={`like-btn ${isLiked ? "liked" : ""}`}
                    >
                        ♥
                    </button>
                    
                </div>

                <div className="card-content">
                    <h4>{title}</h4>
                    <ReadMore description={description} />
                </div>
            </div>
        </>
    );
};

export default Card;
