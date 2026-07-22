import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { baseUrl } from '../assets/baseUrl';

function BlogPage() {
    const [blog,setBlog]=useState(null);
    const [relatedBlog,setRelatedBlog]=useState([])
    const location=useLocation();
    const navigate=useNavigate(); 
    const {loading,setLoading}=useContext(AppContext);
    const blogId=location.pathname.split("/").at(-1);

    async function FetchRelatedData(){
        setLoading(true);
        const url=`${baseUrl}?blogId=${blogId}`;
        try{
            const res=await axios.get(url);
            console.log(res);
            setBlog(res.blog);
            setRelatedBlog(res.relatedBlog);
        }
        catch(err){
            console.error(`There was an error ${err}`)
        }   
        finally{
            setLoading(false);
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default BlogPage
