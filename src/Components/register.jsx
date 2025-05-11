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
            const response = await axios.post("http://localhost:3009/register", {username, password})
            console.log(response.data)
        } catch (error) {
            console.error("Error logging in:", error)
        }
    }
  return (
    <div>
        <h1>Register</h1>
        <center className='login'>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br/>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
           <br/>
           {error && <p style={{ color: 'red' }}>{error}</p>}
            <br/>
            <label>Password:</label>
            <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <br/>

        
            <button  type='submit'  onClick={()=>{
               if (!username && !password) {
               return setError('Username or password is required');
              
              } else if (username.length < 3) {
                 return setError('Username must be at least 3 characters');
              } else {
                setError('');
                alert('Form submitted: ' + username);
               return window.location.href="/register/login"}}}  >Login</button>
        </form>
        
        </center>
    </div>
  )
}

export default Register