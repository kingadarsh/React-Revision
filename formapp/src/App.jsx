import { useState } from "react";
import "./App.css";

function App() {

    const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",comment:"",isChecked:false,mode:"",favCar:""});


    function onChange(event){
        const { name, value, checked, type } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function onSubmitHandler(event){
        event.preventDefault();
        console.log("Finally printing entire form data....")
        console.log(formData)
    }

    // console.log(formData)

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
            <label htmlFor="firstName">First Name</label>
            <input 
                id="firstName" 
                type="text" 
                placeholder="First Name" 
                name="firstname"
                onChange={onChange}
                value={formData.firstname}
            />
    <br />
    <br />
            <label htmlFor="lstName">Last Name</label>
            <input 
                id="firstName" 
                type="text" 
                placeholder="Last Name"
                name="lastname"
                onChange={onChange}
                value={formData.lastname}
            /> 

            <br />
            <br />    

            <input type="email" 
                id="email"
                placeholder="Give your email"
                onChange={onChange}
                name="email"
                value={formData.email}
            />

            <br />
            <br />

            <textarea 
                name="comment" 
                id="textarea"
                onChange={onChange}
                placeholder="add your comment"
                value={formData.comment}
            ></textarea>

            <br />
            <br />
            <input 
                id="checkbox" 
                type="checkbox" 
                onChange={onChange}
                checked={formData.isChecked}
                name="isChecked"
                
            />
            <label htmlFor="checkbox">this checkbox</label>

            <br />
            <br />
            <fieldset>
                <legend>These are the radio buttons</legend>
                    <input type="radio"
                    checked={formData.mode==="online mode"}
                    onChange={onChange}
                    value="online mode"
                    name="mode"
                    />
                    <label htmlFor="">online mode</label>

                    <input type="radio"
                    checked={formData.mode==="offline mode"}
                    onChange={onChange}
                    value="offline mode"
                    name="mode"
                    />
                    <label htmlFor="">offline mode</label>                    

                
            </fieldset>

            <label htmlFor="favCar">tell which is ur fav car </label>
            <select 
                name="favCar" 
                id="favCar"
                value={formData.favCar}
                onChange={onChange}
            >
                <option value="">Select an option</option>
                <option value="Scarpio">Scarpio</option> {/* here the issue is that if after 1st re-render want to select scarpio u cant  */}
                <option value="faartunerr">faartunerr</option>
                <option value="tharr">tharr</option>
            </select>


            <br /><br />


            <button>Submit</button>       
      </form>

    </div>
  )
}

export default App
