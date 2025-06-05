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
         <br />
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

{/* <a  href="https://akirabox.com/download/eyJpdiI6IlNyMW15QTRsNWl3NDlhVUxnMnE2blE9PSIsInZhbHVlIjoiVGt0Ukgwblg1WFBpbUJNTU1BTk5RL3VYREtuQ1g1U2dtTm9MY3ZmaHF3WT0iLCJtYWMiOiI4Zjc2Yjc3ODU0ZTAxZDUzYWQ2OTBjZGYwMTA1NzEwMzhiNzY5MGNhMWZlOGM0YTEwNmQ1MWY0ZmYzMDNjNGRlIiwidGFnIjoiIn0=/Grand_Theft_Auto_V.dmg?expiration=1747148846&amp;signature=9e9fc184f59e10826c5f83dce5cb7c56aab2dfbac1ddfc5507bfc5f8031f3869" >download</a> */}
     

       <br/>
      
       </div>
        <center>
   <button className='download'  onClick={()=>{
       window.confirm("you want to take subscription")
      window.location.href="/home/download/subscription"
     
      }} >Subcription</button>
    </center>
     
    </div>
  )
}

export default Download