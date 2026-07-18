import './Blogs.css';
import {AppContext } from '../context/AppContext';
import { useContext } from 'react';
import Loader from './Loader';
import Cards from './Cards';


function Blogs() {

    const {loading,posts} =useContext(AppContext);
    console.log("Printing inside Blogs "+ posts.length )
    

  return (
    <div className='mainBlogs'>
        {
            loading?<Loader/>: (
                posts.length===0? 
                (<div>No Post Found</div>)
                :
                (
                    posts.map(post=>{
                          return <Cards key={post.id} post={post}/>
                    })
                )
            )
        }   
    </div>
  )
}

export default Blogs
