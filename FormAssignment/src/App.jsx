import { useState } from "react";
import "./App.css";


function App() {


    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"",
        address:"",
        city:"",
        state:"",
        postCode:0,
        comments:"",
        candidates:"",
        offers:"",
        pushNotificationMode:""
    })


    function onChangeHandler(event){
        const {value,type,checked, name}=event.target;

        setFormData(prev=>{
            return{
                ...prev,
                [name]: type==="checked"?checked:value
            }
        })        
    }

    function onSubmitHandler(event){
        event.preventDefault();
        console.log("Finally the form data is....")
        console.log(formData)
    }
  return (
    <div className="FormDiv">
      <form action="" onSubmit={onSubmitHandler} className="MainForm">
            <div>
                <label htmlFor="" >First Name</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                                    
                  />
            </div>

            <div>
                <label htmlFor="">Last Name</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                                    
                  />
            </div>

            <div>
                <label htmlFor="">Email Address</label>
                <input
                    onChange={onChangeHandler}
                    type="email"
                    name="email"
                    value={formData.email}
                                    
                  />                
            </div>

            <div>
                <label htmlFor="">Country</label>
                <select name="country" id="" value={formData.country} onChange={onChangeHandler}>
                    <option value="">Choose a Country</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                </select>
            </div>

            <div>
                <label htmlFor="">Street Address</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="address"
                    value={formData.address}
                                    
                  />                
            </div>

            <div>
                <label htmlFor="">City</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                        name="city"
                        value={formData.city}                  
                                    
                  
                  />                
            </div>

            <div>
                <label htmlFor="">State / Province</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="state"
                    value={formData.state}                  
                                    
                  />
            </div>

            <div>
                <label htmlFor="">ZIP / Postal Code</label>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        name="postCode"
                        value={formData.postCode}
                                            
                      />
            </div>

            <div>
                <fieldset>
                    <legend>By Email</legend>
                        <input
                            onChange={onChangeHandler}
                            type="checkbox"
                            name="comments"
                            value="Comments"
                          checked={formData.comments=="Comments"}                          
                          />
                        <label htmlFor="">Comments</label>
                        <p>Get notified when someone puts up a comment</p>

                        <input
                            onChange={onChangeHandler}
                            type="checkbox"
                            name="candidates"
                            value="Candidates"
                          checked={formData.candidates=="Candidates"}                          
                          
                          />
                        <label htmlFor="">Candidates</label>
                        <p>Get notified when a candidate applies for a job</p>

                        <input
                            onChange={onChangeHandler}
                            type="checkbox"
                            name="offers"
                            value="Offers"
                          checked={formData.offers=="Offers"}                          
                          
                          />
                        <label htmlFor="">Offers</label>
                        <p>Get notified when a candidate accept or reject an offer</p>
                </fieldset>
            </div>

            <div>
                <fieldset>
                    <legend>Push Notification</legend>
                    <p>There are delivered via SMS to mobile phones</p>


                    <input
                        onChange={onChangeHandler}
                        type="radio"
                        name="pushNotificationMode"
                        value="Everything"
                        checked={formData.        pushNotificationMode=="Everything"}                      
                    />
                    <label htmlFor="">Everything</label>

                    <input
                        onChange={onChangeHandler}
                        type="radio"
                        name="pushNotificationMode"
                        value="Same as Email"
                        checked={formData.pushNotificationMode=="Same as Email"}                      
                    />
                    <label htmlFor="">Same as Email</label>
                    
                    <input
                        onChange={onChangeHandler}
                        type="radio"
                        name="pushNotificationMode"
                        value="No Push Notification"
                        checked={formData.pushNotificationMode=="No Push Notification"}                      
                />
                    <label htmlFor="">No Push Notification</label>
                </fieldset>
            </div>


            <div>
                <button>Save</button>                
            </div>

            

            

            

            

            

            
 






      </form>
    </div>
  )
}

export default App
