
import axios from 'axios';
import './Tags.css';
import { useEffect, useState } from 'react';
const API_KEY=import.meta.env.VITE_APP_GIPHY_API_KEY;
import Spinner from './Spinner';


function Tags() {
    const [gifs,setGifs]=useState('');
    const [loading,setLoading]=useState(false);
    const [tag,setTag]=useState('car');

    useEffect( ()=>{
        const fetchData= async ()=>{
            setLoading(true);
            try{
                let url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
                let outcome=await axios.get(url);
                console.log(outcome.data.data.images.downsized.url);
                outcome=outcome.data.data.images.downsized.url;
                setGifs(outcome);
            }
            catch(err){
                console.error("Thre was an error "+err)
            }finally{
                setLoading(false);
            }

        }

        fetchData();
    },[])

  return (
    <div>
          <div className="ByChoiceGifBox">
        <div>
            <h2>
                Gifs By Choice
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

        <button>Generate</button>

    </div>
    </div>
  )
}

export default Tags
