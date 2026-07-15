import { useState } from "react"
import axios from "axios";
import {useEffect} from 'react';
const API_KEY=import.meta.env.VITE_APP_GIPHY_API_KEY;
import Spinner from "./Spinner";

function RandomGifs() {
    const [gifs,setGifs]=useState('');
    const [loading,setLoading]=useState(false);
    console.log(API_KEY)

    

    async function fetchData(){
        try{
            setLoading(true);
            let url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

            const output=await axios.get(url);
            console.log(output.data.data.images.downsized.url)
            const URL=output.data.data.images.downsized.url;
            setGifs(URL)
        }
        catch(err){
            console.error("there was an error "+err)
        }
        finally{
            setLoading(false);
        }

        
    }

    

    useEffect(()=>{
        fetchData();
    },[])
    
    function onClickHandler(){
        fetchData();
    }
    
    return (
        <div>
            <div className="RandomGifBox">
                <div>
                    <h2>
                        A Random Gif
                    </h2>
                </div>
                <div className="ApiFetch">

                    { loading?<><Spinner/>  Loading... </>: <img src={gifs} alt="This is the Gifs" />}
                </div>

                <button onClick={onClickHandler}>Generate</button>

            </div>
        </div>
    )
}

export default RandomGifs
