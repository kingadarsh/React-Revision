

import useGifs from '../hooks/useGifs';
import './Tags.css';
import { useEffect, useState } from 'react';




function Tags() {
    const [tag,setTag]=useState('car');
    const {gifs,loading,fetchData}=useGifs(tag);

    


    function onClicBtnkHandler(){
        fetchData(tag);
    }

  return (
    <div>
          <div className="ByChoiceGifBox">
        <div>
            <h2>
                Gifs Of {tag}
            </h2>
        </div>
        <div className="ApiFetch">
            {loading?"Loding":<img src={gifs} alt="" />}
        </div>

        <input  
        type="text" 
        name='tag'
        value={tag}
        onChange={(e)=>setTag(e.target.value)}
        placeholder="Search your gifs" />

        <button onClick={onClicBtnkHandler}>Generate</button>

    </div>
    </div>
  )
}

export default Tags
