import { createContext, useEffect, useState } from "react";
export const AppContext=createContext();
// import baseUrl from '../assets/baseUrl';
import axios from 'axios';
import {baseUrl} from '../assets/baseUrl';


export default function AppContextProvider({children}){
    const [loading, setLoading]=useState(false);

    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]= useState(null);

    async function fetchData(page=1){

        try{
            setLoading(true);
            if(baseUrl){
                const url=`${baseUrl}?page=${page}`;
                let data= await axios.get(url);
                data=data.data;
                console.log(data);
                setPosts(data.posts);
                setPage(data.page);
                setTotalPages(data.totalPages)
            }            
            else{
                console.log("The baseUrl was undefined and the problem lies in it ");
            }
        }
        catch(err){
            console.error("There was an error in the API "+err)
            alert("There was an err in AppContext");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        finally{
            setLoading(false);

        }
    }


    function handlePageChange(page){
        setPage(page);
        // fetchData(page);
    }

useEffect (()=>{
    fetchData(page);
},[page])



    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchData
    }

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider> )
}