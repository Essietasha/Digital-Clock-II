import React from 'react'
import { useLocation } from 'react-router-dom';


const Welcome = () => {
    const location = useLocation();                  // Get the current location info
    const username = location.state;

    var message;
    const runDate = () =>{
        let thisDate = new Date();
        const currentDate = thisDate.toLocaleString('default', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        if (currentDate.hour < 11){
            message = 'Good Morning!'
        }else if( currentDate.hour >= 12 && currentDate.hour <= 18){
            message = 'Good Afternoon!'
        }else{
            message = 'Good Evening!!!'
        }
        document.getElementById('time').textContent = `Welcome ${username}, today is ${currentDate}`;
        document.getElementById('greeting').textContent = message;
        document.getElementById('rtn').classList.add('ml');
    }
    
  return (
    <section className='secWelcome'>
    <div className="mainCont">
        <div className="greetings">
            <div id="greeting"></div>
            <div id="time"></div>
        </div>

        <div className="helloCont"><button className='btnClickHere' onClick={runDate}>Hello, Click Here</button></div>
        <div className="returnBtn"><button className='return' id='rtn'>Return</button></div>
    </div>
</section>
  )
}

export default Welcome;
