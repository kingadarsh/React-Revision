import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

function App(){

    const products=[
        {
            id:"p1",
            title:"Nirma",
            amount:"100",
            date:new Date(2021,8,10)
        },{
            id:"p2",
            title:"SurfExcel",
            amount:"200",
            date:new Date(2003,18,2)
        },{
            id:"p3",
            title:"vanish",
            amount:"150",
            date:new Date(2012,12,12)
        },{
            id:"p4",
            title:"Tide",
            amount:"500",
            date:new Date(2025,12,7)
        }
    ];

    function functionA(data){
        console.log("Function from app.jsx");
        console.log(data);
    }

    return (
        <>
            <div>
                <NewProduct functionA={functionA} ></NewProduct>
                <Products Items={products}></Products>
            </div>
            
            
        </>
    )
}


export default App;