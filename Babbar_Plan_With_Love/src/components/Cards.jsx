import './Card.css';
import ReadMore from './ReadMore';
// import data from '../assets/data';

function Cards(props){


    return (
        <div className="card">

            <div className="card-img">
                <img
                    src={props.image}
                    alt={props.name + " Place"}
                />
            </div>

            <div className="card-content">

                <h4 className="card-price">
                    ₹{props.price}
                </h4>

                <h3 className="card-name">
                    {props.name}
                </h3>

                <div className="card-description">
                    <ReadMore
                        text={props.info}
                        maxCharCount={150}
                    />
                </div>

                <button 
                onClick={()=>props.onNotIntrestedClickHandler(props.id)}
                className="not-interested-btn">
                    Not Interested
                </button>

            </div>

        </div>
    );
}

export default Cards;