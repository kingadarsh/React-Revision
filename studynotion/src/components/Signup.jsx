import './Signup.css';
import { useState } from 'react';
import './Login.css';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import border from '../assets/border.png'
import login from '../assets/login.png'

function Signup() {
  const [formData,setFormData]=useState({
        email:"",
        password:"",
        firstname:"",
        lastname:""
    })
    

    function onChangeHandler(event){
        const {name,value}=event.target;

        setFormData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })

    }

    const [showPass,setShowPass]=useState(false);
    // const [pass,setPass]=useState();

    function onClickShowPass(event){
        event.preventDefault()
        setShowPass(prev=>!prev);
    }


    function onClickSubmit(){

    }


  return (
   <div className="login-container">
    <div className="login-content">

        <div className="login-heading">
        <h2>Join the millions learning to code with StudyNotion for free. </h2>
        <p>Build skills for today, tomorrow, and beyond.</p>
        <p className="highlight">
            Education to future-proof your career.
        </p>
        </div>

        <div className='Toggle-stu-inst'>
            <button className='toggle-stu'>Student</button>
            <button className='toggle-inst'>Instructor</button>
        </div>

        <div className="login-form-section">

        <form onSubmit={onClickSubmit} className="login-form">
            <div className='first-last-name-inpt'>
                <div className='first-name-inpt'>
                    <label>First Name *</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <label className='last-name-inpt'>Last Name *</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>





            <label>Email Address *</label>
            <input
            type="text"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            />

            <div className="create-Pass-field">

    <div>
        <label>Create Password *</label>

        <div className="password-field">
            <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
            />

            <button
                type="button"
                className="eye-btn"
                onClick={onClickShowPass}
            >
                {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
        </div>
    </div>

    <div>
        <label>Confirm Password *</label>

        <div className="password-field">
            <input
                type={showPass ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={onChangeHandler}
            />

            <button
                type="button"
                className="eye-btn"
                onClick={onClickShowPass}
            >
                {showPass ? <IoEyeOutline className='khuliankh'  /> : <IoEyeOffOutline className='khuliankh' />}
            </button>
        </div>
    </div>

</div>
            <p className="forgot-password">
            Forgot Password
            </p>

            <button className="signin-btn">
            Sign In
            </button>

        </form>

        <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
        </div>

        <button className="google-btn">
            <FcGoogle />
            Sign in with Google
        </button>

        </div>

    </div>

    <div className="image-section">
        <img className='bg-bordered' src={border} alt="" />
        <img className='picOfgirl' src={login} alt="" />
    </div>
</div>
  )
}

export default Signup
