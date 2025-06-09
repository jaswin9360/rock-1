import React from 'react'
import axios from 'axios'
import "./Login.css"

function Register() {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState('');


  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      const response = await axios.post("https://rocks-backend.onrender.com/register", { username, password })
      console.log(response.data)
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

  const check = () => {
    if (checkbox.checked) {
      const uname = username
      const upassword = password;
      console.log(upassword)
      localStorage.setItem("uname", uname)
      localStorage.setItem("upassword", upassword)
    }
  }
  return (
    <div>
      <h1>Register</h1><br />
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

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

          <br />
          <label for="me">Remember Me</label>
          <input type='checkbox' id='checkbox' onClick={check}></input>
          <br />

          <button type='submit' onClick={() => {
            if (!username && !password) {
              return setError('Username or password is required');

            } else if (username.length < 5 && password.length < 7) {
              return setError('Username must be at least 4 characters and password least 6 ');
            } else {
              setError('');
              alert('Form submitted: ' + username);
              setTimeout(() => {
                return window.location.href = "/login"
              }, 1500)
            }
          }}  >Login</button>
        </form>

      </center>
    </div>
  )
}

export default Register;
