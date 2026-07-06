import './App.css';
import HeadingComponent from './components/HeadingComponent';
import Name from './components/Name';
import Data_time from './components/data_time'
import Card from './components/Card';

function App(){

    const response=[
        {
            "name":"Nirma",
            "date":"20",
            "month": "10",
            "year":"1998"
        },{
            "name":"SurfExcel",
            "date":"10",
            "month": "2",
            "year":"1960"
        },{
            "name":"Vanish",
            "date":"15",
            "month": "8",
            "year":"1988"
        }
    ]
    

    return (
        <>

        <Card>
            {
                response.map(res=>{
                    return (
                        
                        <>
                            <Name name={res.name} ></Name>
                            
                            <Data_time date={res.date}
                                month={res.month}
                                year={res.year}
                            ></Data_time>
                        </>
                    )
                })
            }                
        </Card>



            <HeadingComponent></HeadingComponent>            
            
        </>
    )
}

export default App;