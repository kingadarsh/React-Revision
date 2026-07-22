import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

function TagPage() {
    const navigate=useNavigate();
    // const {tag}=useContext(AppContext)
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigate(-1)}>Back</button>
        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>

    </div>
  )
}

export default TagPage
