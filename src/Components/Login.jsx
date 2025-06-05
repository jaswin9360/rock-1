import React from 'react'
import { useState, useEffect } from 'react'
import styles from './LoginModal.module.css';

import axios from 'axios'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
function Login() {
  const [code, setCode] = useState([])

  try {
    useEffect(() => {
      async function data() {
        const response = await axios.get("http://localhost:3009/home")
        console.log(response.data)
        setCode([response.data.pop()])

      }
      data()
    }, [])
  } catch (error) {
    console.log(error)
  }


const  navigate = useNavigate();

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [error, setError] = React.useState(false)



  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);


  //  console.log( code[0].username)

  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      const response = await axios.post("http://localhost:3009/login", { username, password })
      console.log(response.data)
      localStorage.removeItem("age")
      localStorage.removeItem("bod")
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home")
    } catch (error) {
      console.error("Error logging in:", error)
    }

  }

  const [uname, setUname] = React.useState("")
  const [upassword, setUpassword] = React.useState("")

  const handleSubmit2 = async (e)=>{
    e.preventDefault();
    console.log(uname,upassword)
    const response = await axios.put("http://localhost:3009/rename" ,{username:uname,password:upassword})
    console.log(response)
    alert("updated successfully")
    setUname("")
    setUpassword("")
  }

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modalBackground') {
      handleClose();
    }
  }


  const autofill = () => {
    alert("hello")
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <h2 className='second'>Time left: {secondsLeft} sec</h2>

        <ul>

          {secondsLeft === 0 ? " " :
            code.map((item, index) => (
              <div className='code' key={index}>
                {"Password :" + " " + item.password}
              </div>

            ))}
        </ul>
      </div>
      <center className='login'>
        <form onSubmit={handleSubmit}>
          <img className="img" src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="image" /><br />
          <label className='lab'>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <label className='lab'>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <br />
          <div className='fg'>
          <a className='autofill' onClick={autofill}>Auto fill</a><br />
          <a  className="fp" onClick={handleOpen} >Forgot password</a>
          </div>
          <>

            {showModal && (
              <center>
              <div
                id="modalBackground"
                className={styles.modal}
                onClick={handleOutsideClick}
              >
                <div className={styles.modalContent}  >
                  <div className={styles.imgContainer}>
                    <span onClick={handleClose} className={styles.close}>&times;</span>

                  </div>

                  <div className={styles.container}>
                    <label><b>Username : </b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required onChange={(e)=>setUname(e.target.value)}/>
                    <br />
                    <br />
                    <label><b> New Password : </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>setUpassword(e.target.value)} />
                    <br />
                    <button type="onSubmit" onClick={handleSubmit2}>Login</button>
                    
                  </div>

                  <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" onClick={handleClose} className={styles.cancelbtn}>Cancel</button>
                  </div>
                </div>
              </div>
              </center>
            )}
            
          </>
          <br />
          <button type="submit" onClick={() => {

            if (!username) {
              return setError("username is required")
            }
            else if (!password) {
              return setError("password is required")
            }
            else if (username === code[0].username) {
              alert("wait for 5 seconds")
              return setTimeout(() => { window.location.href = "/home" }, 5000)
            }
            else {
              setError("login failed incorrect username or password ")
            }

          }} >Login</button>
        </form>
      </center>
    </div>
  )
}


export default Login;
