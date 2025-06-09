import React, { useState, createContext } from 'react'
import { useNavigate } from "react-router-dom"
import './Main.css'
import { useEffect } from 'react'
function Main() {

  const navigate = useNavigate()
  const login = localStorage.getItem("isLoggedIn")
  console.log("login", login)



  useEffect(() => {
    if (login === "true") {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [login, navigate]);



  const [input, setInput] = useState(false)
  const [check, setCheck] = useState(false)
  const handlechange = () => {
    setInput(true);
  }

  const handlecheck = () => {
    if (checkbox.checked) {
      setCheck(true);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
  return (
    <div  >
      <div  >
        <img className="img2" src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg" />
        <button className='continue' onClick={handlechange}>continue</button><br />

        {input && <>
          <center className='para'>
            <h2 className='head'>Terms and Conditions</h2> <br />
            <h3 className='head2'>Please read the conditions before entering into it</h3> <br />
            <h4 className='head3'>Terms </h4> <br />
            <p className='terms'>1. You agree to the rules: By playing the game, you accept the terms and conditions set by Rocks Games.</p> <br />
            <p className='terms'>2. Account responsibility: You’re responsible for your account and keeping your login details safe.</p> <br />
            <p className='terms'>3. Limited license: You don’t own the game; Rocks gives you permission to play it as long as you follow the rules.</p> <br />
            <p className='terms'>4. Legal issues must go through private arbitration, not court unless you opt out within 30 days.</p> <br />
            <h2 className='head4'>Conditions</h2> <br />
            <p className='terms'>5. If have register already  do only login to open download page.</p> <br />
            <p className='terms'>6. If haven't register then  go with register and then login .</p> <br />
            <p className='terms'>7. Once you reach the login page , we provide code  for 30 secendsn before that copy the code  and paste in password area<br />
              before entering username must be correct.</p> <br />
          </center>



          <div className='Input' >
            <label for="input" className='agree'>Agree with this tearms and conditions</label>
            <input type='checkbox' id='checkbox' ></input><br>
            </br>
            <center>
              <br />
              <button className='handlecheck' onClick={handlecheck}>agree</button>
            </center>
            <br />
          </div>
        </>}<br />

        {
          check && <button className="main" onClick={ window.location.href = "/register"}>Go On</button>
        }

      </div>



    </div>
  )
}

export default Main


