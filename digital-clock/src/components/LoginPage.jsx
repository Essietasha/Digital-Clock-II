import React from 'react'
import { IoIosPerson } from "react-icons/io";import { HiLockClosed } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const LoginPage = () => {

    const [username, setUsername] = useState('');                           //The name of the state and the name of the function we call to change that state
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const returnToWelcome = (e) => {
        e.preventDefault(); 
         if (username < 1 || password < 4){
            document.getElementById('errorMessage').textContent = 'Please input a valid username and at least 4 digit password!!';
         } else {
            return navigate('/welcome', {state: username});
         };
    
    }

  return (
    <section className="loginMainCont">
        <div className="error"><p id='errorMessage'></p></div>
    <div className="gridCont">
        <div className="gridBox gridBoxI">

            <div className="welcomeBack">
                <h1>Digital Clock!</h1>
                <p className='p1'>Everything on the planet revolves around Time!</p>
            </div>

            <div className="emailPasswordCont">
                <div className="profileLogo"> <IoPersonCircleSharp className='logoP'/> </div>

                <div className="mailPBoxGrid">
                    <div className="boxgrid icon"><IoIosPerson className='icons'/></div>
                    <div className="boxgrid textPbox"><input className='textPbox' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /></div>
                </div>
                    
                <div className="mailPBoxGrid mailPBoxGrid2">
                    <div className="boxgrid icon"><HiLockClosed className='icons'/></div>
                    <div className="boxgrid "><input className='textPbox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" /></div>
                </div>

                <div className="remeberMeGrid">
                    <div className="rememberMe">
                        <label htmlFor="remember-me" className='rmb'><input id="remember-me" type="checkbox"  name="remember-me" />Remember me</label>
                    </div>
                    <div className="forgotPassword">
                        <a href="" className='fp'>Forgotten Password?</a>
                    </div>
                </div>
                <div className="btn"> <button onClick={returnToWelcome} className='loginBtn'>Login</button> </div>
            </div>


        </div>

        <div className="gridBox imageCont">
        </div>
    </div>
</section>
  )
}

export default LoginPage;