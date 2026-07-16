import axios from 'axios';
import { useEffect, useState } from 'react';
const API_KEY=import.meta.env.VITE_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

function useGifs(tag) {
    const [gifs,setGifs]=useState('');
    const [loading,setLoading]=useState(false);

    const fetchData= async (tag)=>{
        setLoading(true);
        try{
            
            let outcome=await axios.get(tag ? `${url}&tag=${tag}`: url);
            console.log(outcome.data.data.images.downsized.url);
            outcome=outcome.data.data.images.downsized.url;
            setGifs(outcome);
        }
        catch(err){
            console.error("There was an error "+err)
        }finally{
            setLoading(false);
        }

    }

    useEffect( ()=>{
        fetchData(tag);
    },[]);

    return {gifs,loading,fetchData};

}

export default useGifs
