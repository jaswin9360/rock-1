import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import "./Login.css"
  function Login() {
const [code ,setCode ]=useState([])

try {
    useEffect(()=>{
        async  function data (){
          const response = await axios.get("http://localhost:3009/home")
           console.log(response.data)
           setCode([response.data.pop()])
                }
                data()
              },[ ]) 
      } catch (error) {
        console.log(error)
      }
  
          

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [secondsLeft, setSecondsLeft] = useState(30);
    const [error,setError]=React.useState(false)
  
    

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
            const response = await axios.post("http://localhost:3009/login", {username, password})
            console.log(response.data)
            
        } catch (error) {
            console.error("Error logging in:", error)
        }
      
    }


  
  return (
    <div>
        <h1>Login</h1>
        <div>
      <h2 className='second'>Time left: {secondsLeft} sec</h2>
     
      <ul>
        
        { secondsLeft ===0 ? " "  : 
          code.map((item,index)=>(
        <div className='code' key={index}>
         { "Password :" + " " + item.password }
        </div>

      ))}
      </ul>

    </div>
        <center className='login'>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br/>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br/>
            {error && <p style={{ color: 'red' }}>{error}</p> }
            <br/>
            <label>Password:</label>
            <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
           
            <button   type="submit" onClick={()=>{
              
              if(!username){
               return setError("username is required")
              }
             else if (!password) {
               return setError("password is required")
              }
              else if (username===code[0].username) {
                alert("wait for 5 seconds")
               return setTimeout(()=>{ window.location.href="/home"},5000)
               }
               else{
                setError("login failed incorrect username or password ")
               }
              
               }} >Login</button>
        </form>
        </center>
    </div>
  )
  }

export default Login