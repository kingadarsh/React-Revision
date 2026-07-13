import { useState } from 'react';
import './Login.css';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import border from '../assets/border.png'
import login from '../assets/login.png'
import { ToastContainer,toast } from 'react-toastify';

// import { toast } from "react-toastify";

function Login() {
    const [formData,setFormData]=useState({
        email:"",
        password:""
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

    const showToastMessage = () => {
    toast.success("Successfully Login !", {
      position: "top-center"
    });
  };

    function onClickSubmit(event){
        event.preventDefault();
        showToastMessage();
        console.log(formData);
    }


  return (
   <div className="login-container">
    <ToastContainer />
    <div className="login-content">

        <div className="login-heading">
        <h1>Welcome Back</h1>
        <p>Build skills for today, tomorrow, and beyond.</p>
        <p className="highlight">
            Education to future-proof your career.
        </p>
        </div>

        <div className="login-form-section">

        <form onSubmit={onClickSubmit} className="login-form">

            <label>Email Address *</label>
            <input
            type="text"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            />

            <label>Password *</label>

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

export default Login
