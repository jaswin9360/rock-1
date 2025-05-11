import React from 'react'
import VideoPlayer from "react-video-js-player"
import { useEffect,useState } from 'react'
import axios from 'axios'
import "./Home.css"
function Home() {

  const [code ,setCode ]=useState([])
  const [age,setAge]= useState(false)
  const [bod,setBod]=useState("")
  const [year,setyear]=useState("")
  const [error ,setError]=useState("")

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

        const handleadd = (e)=>{
          e.preventDefault()
          localStorage.setItem("age",year)
          localStorage.setItem("bod",bod)
         setAge(false)
          console.log(year,bod)
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

      {  age===true?age && <><div className='age'>
        <br/>
        <label>BOD :</label>
        <input type='date' onChange={(e)=>setBod(e.target.value)} />
        <br/>
        <label>AGE :</label>
        <input type='number' placeholder='Enter age' onChange={(e)=>setyear(e.target.value)}/>
        <button className='add' onClick={(e)=>{
          handleadd(e)
          if(year>=18){
         setTimeout(() => {
          window.location.href="/register/login/home/download"
         }, 2000); }
          }}>Add</button>
        </div>
       </>:""  }
        <br/>
      { setAge===false?"":<button className='download' onClick={(e)=>handlesubmit(e)} >download</button>}

       <br/>
       </div>
   
     
    </div>
  )
}

export default Home