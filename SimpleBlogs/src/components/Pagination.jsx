import { useContext } from 'react';
import './Pagination.css';
import { AppContext } from '../context/AppContext';

function Pagination() {

    const {page,totalPages,handlePageChange}=useContext(AppContext);


    function onClickPrevHandler(){
        // e.preventDefault();
        if(page<=1){
            alert("You are already on Page 1.");
            return;
        }else{
            handlePageChange(page-1)
        }
    }
    
    function onClickNxtHandler(){
        // e.preventDefault();
        if(page===totalPages){
            alert("You are already on the last page.");
            return;
        }else{
            handlePageChange(page+1);
        }
    }

  return (
    <div className='Pagination'>
        <div>
        {            
            page===1?
            null:(<button 
            className='btn'
            onClick={onClickPrevHandler}
            >
                Previous
            </button>)
            
        }
        
        {
            page===totalPages?
            null:
            <button 
            className='btn'
            onClick={onClickNxtHandler}


            >
                Next
            </button>
        }


        </div>

        <div>
            <p>Page {page} of {totalPages} </p>
        </div>
      
    </div>
  )
}

export default Pagination
