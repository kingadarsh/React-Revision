import "./App.css";

import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { filterData } from "./assets/data";
import { apiUrl } from "./assets/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/spinner";

function App(){

    const [courses,setCourses]=useState({});
    const [spinner,setSpinner]=useState(true);
    const [category,setCategory]=useState(filterData[0].title);

    useEffect(()=>{
        const fetchData=async ()=>{
            setSpinner(true); 
            try{
                const res= await fetch(apiUrl);
                const output=await res.json();
                setCourses(output.data);                
            }
            catch(error){
                toast.error(`Something went wrong with the API call. `);
                console.log(`The error is : ${error}`)
            }
            finally{
                setSpinner(false);
            }
        }


        fetchData();
        
    },[]);
    
    return (
        <>
        {

            spinner?
            (<Spinner></Spinner>)
            :
            (
            <>
                <Navbar></Navbar>
                <Filters category={category} setCategory={setCategory} filterData={filterData} ></Filters>
                <Cards category={category} courses={courses}></Cards>
            </>
            )
        }

            
        </>
    )
}


export default App;
