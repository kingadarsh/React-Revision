import './Name.css';
import Card from './Card';
import Date_time from './Date_time';
import { useState } from 'react';

function Name(props){
    
    const [title,setIsClicked]=useState(props.title);

    return(
        <Card className='product-item'>

            <Date_time date={props.date} />

            <div className='product-item_desc'>
                <h2>{title}</h2>
            </div>
            {<button onClick={()=>setIsClicked("Popcorn")}>Add to cart </button>}

        </Card>
    );
}

export default Name;