import "./NewProduct.css";
import Form from "./Form";



function NewProduct(props){

    function functionB(data){
        props.functionA(data)
        console.log(`data from newProduct ${data}`);
    }

    return (
        <>
            <div className="new-product" >
                <Form functionB={functionB} ></Form>
            </div>
            
        </> 
    )
}

export default NewProduct;