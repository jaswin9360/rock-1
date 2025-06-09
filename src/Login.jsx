import React from 'react'
import { useState, useEffect } from 'react'
import styles from './LoginModal.module.css';
import axios from 'axios'
import "./Login.css"
import LoadingSpinner from './LoadingSpinner';

function Login() {

  const [code, setCode] = useState("")
  const token = true
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(false)


  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      const response = await axios.post("https://rocks-backend.onrender.com/login", { username, password })
      setCode(response.data.point)
      localStorage.removeItem("age")
      localStorage.removeItem("bod")
      localStorage.setItem("isLoggedIn", token);
      localStorage.setItem("name", username)
    } catch (error) {
      console.error("Error logging in:", error)
    }

  }

  const [uname, setUname] = React.useState("")
  const [upassword, setUpassword] = React.useState("")

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log(uname, upassword)
    const response = await axios.put("https://rocks-backend.onrender.com/rename", { username: uname, password: upassword })
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
    const name = localStorage.getItem("uname")
    const passwords = localStorage.getItem("upassword")
    setPassword(passwords)
    setUsername(name)
    console.log(password)

  }
  // console.log(code)
  return (
    <div>
      <h1>Login</h1>
      <br />
      <br />
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
            <a className="fp" onClick={handleOpen} >Forgot password</a>
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
                      <input type="text" placeholder="Enter Username" name="uname" required onChange={(e) => setUname(e.target.value)} />
                      <br />
                      <br />
                      <label><b> New Password : </b></label>
                      <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => setUpassword(e.target.value)} />
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
          <button type="onSubmit" onClick={() => {
            setTimeout(() => {
              if (!username) {
                return setError("username is required")
              }
              else if (!password) {
                return setError("password is required")
              }
              else if (code == 2) {
                alert("wait for 5 seconds");
                setLoading(true)
                setTimeout(() => setLoading(true), 1000);
                return setTimeout(() => window.location.href = "/home", 5000)
              }
              else if (code == 1) {
                return setError("login failed incorrect username or password ")
              }
              else {
                return setError("")
              }
            }, 1000)
          }
          }>Login</button>
          <div>
            {loading ? <LoadingSpinner /> : ""}
          </div>
        </form>
      </center>
    </div>
  )
}


export default Login;
