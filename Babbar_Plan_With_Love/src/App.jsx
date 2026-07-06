import { useState } from 'react';
import './App.css';
import Data from './assets/data';
import Cards from './components/Cards';
import SheshNag from './components/SheshNag';

function App(){
    const [data,setData]=useState(Data);

    function onNotIntrestedClickHandler(id){
        let newData=data.filter(item=>item.id!==id)

        setData(newData);
    }

    function onClickResetbtn(){
        setData(Data);
    }

    return (
        <>
        <div>
            <h1>Plan With Love ❤️</h1>

            <div className="cards-container">
                {
                    data.map((item) => (
                        <Cards
                            key={item.id}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                            info={item.info}
                            id={item.id}
                            onNotIntrestedClickHandler={onNotIntrestedClickHandler}
                        />
                    ))
                }
            </div>

            <div>

                {
                (data.length<=0? <SheshNag onClickResetbtn={onClickResetbtn} data={data}></SheshNag>:null)
                
            }


            </div>
        </div>

        </>
    )
}

export default App;
