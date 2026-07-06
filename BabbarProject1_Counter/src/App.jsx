import { useState } from 'react';
import './App.css';

function App(){

    const [cnt,setCnt]=useState(0);

    function onIncreaseHandler(){        
        setCnt(prev=>prev+1);
    }

    function onDecreaseHandler(){
        if(cnt<=0){
            alert("Decrement below Zero!!!!")
            return;
        }
        setCnt(prev=>prev-1);
    }    

    function onResetHandler(){

        setCnt(0);
    }    

    return (
        <>
            <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>

                <div className='text-[#0398d4] font-medium text-2xl'>Increment and Decrement</div>
                <div className=' bg-white flex gap-12 py-3 px-3 rounded-sm text-25px  text-[#343151] '>

                    <button onClick={onIncreaseHandler} 
                    className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
                        +
                    </button>

                    <div
                    className='text-center w-20 text-5xl'
                    >
                        {cnt}
                    </div>

                    <button onClick={onDecreaseHandler} 
                    className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'
                    >
                        -
                    </button>
                    
                </div>
                <button onClick={onResetHandler}
                className='bg-[#0398d4] text-white px-2 py-2 rounded-sm text-lg '
                >reset</button>
            </div>
        </>
    );
};

export default App;