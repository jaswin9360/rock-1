import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "./Home.css"
function Download() {

  const [code ,setCode ]=useState([])
  

  try {
      useEffect(()=>{
          async  function data (){
            const response = await axios.get("http://localhost:3009/home2")
             console.log(response.data)
             setCode([response.data.pop()])
           
                  }
                  data()
                },[ ]) 
        } catch (error) {
          console.log(error)
        }

        const handlesubmit = ()=>{
        setAge(true)
        }


        console.log(code)
        
  return (
    <div>
      <div>
       
          <details className='name1'>
          <summary className='name2'> profile </summary>
           <ul>
              {
                code.map((item,index)=>(
                  <div className='name' key={index}>
                    {"name :" + " " +item.username}<br/>
                    {"age :" +" "+ localStorage.getItem("age")}<br/>
                    {"BOD :"+ " " +localStorage.getItem("bod")}
                  </div>
                ))
              }
          </ul>
          
          </details>
        
      </div>
        <h1>Welcome to the Game Download Page</h1>
        <div className="image-container">
    
       <center>Download the game from the link below:</center>
       <center>
        <img className='gta' src= "https://videos-rockstargames-com.akamaized.net/screencaps/10998/en_us/1280.jpg"/>
              <br/>
        <video className='video' width="400" src='https://videos.rockstargames.com/v4/a8k183c8/flv/en-us-720p.mp4' controls>
        </video>
       </center>
       <br/>

    
     <button className='download' onClick={(e)=>handlesubmit(e)} >download</button>\

       <br/>
       </div>
   
     
    </div>
  )
}

export default Download