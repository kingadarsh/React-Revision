import { useState } from 'react';
import './Form.css';

function Form(props){

    const [newDate,setnewDate]=useState("");
    const [newTitle,setnewTitle]=useState("");
    function onClickHandler(){
        return 0;
    }

    function  onTitleChangeHandler(event){
        setnewTitle(event.target.value);
    }

    function onDateChangeHandler(event){
        setnewDate(event.target.value);
    }

    function formSubmitHandler(event){
        event.preventDefault();
        const ProductInfo={
            title:newTitle,
            date:newDate
        }

        props.functionB(ProductInfo);

        console.log(ProductInfo)
        setnewDate("");
        setnewTitle("");
    }


    return(
        <>
            <form action="" onSubmit={formSubmitHandler} >


                <div className='New-Product-Title'>
                    <label htmlFor="TitleForm">Whats the title : </label>
                    <input 
                    id='TitleForm' 
                    value={newTitle}
                    onChange={onTitleChangeHandler} 
                    type="text" 
                    placeholder='Give the Title'/>
                </div>

                <div className='New-Product-Date'>
                    <label htmlFor="DateForm">What's the Date : </label>

                    <input 
                        onChange={onDateChangeHandler}
                        type="date" 
                        id='DateForm' 
                        value={newDate}
                        placeholder='Give the Date' 
                        min='2023-01-01'
                        max='2023-12-12'
                    />
                </div>

                <button 
                    className='New-Product-Button'
                    type='submit' 
                    onClick={onClickHandler}>
                    Add Product
                </button>
            </form>
        </>
    );
};

export default Form;