import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
function Home() {
  const [hideButton, setHideButton] = useState(() => {
    return localStorage.getItem('isVerified') === 'true';
  });

  const navigate = useNavigate()
  const name = localStorage.getItem("name")

  const [code, setCode] = useState([])
  const [age, setAge] = useState(null)
  const [bod, setBod] = useState("")
  const [year, setyear] = useState("")
  const [error, setError] = useState("")

  try {
    useEffect(() => {
      async function data() {
        const response = await axios.get(`https://rocks-backend.onrender.com/home2/${name}`)
        console.log(response.data)
        setCode([response.data])
        age === null ? setHideButton(false) : ""
      }
      data()
    }, [])
  } catch (error) {
    console.log(error)
  }

  const handlesubmit = () => {
    setAge(true)
  }

  const handleadd = (e) => {
    e.preventDefault()
    localStorage.setItem("age", year)
    localStorage.setItem("bod", bod)
    setAge(false)
    console.log(year, bod)
  }

  useEffect(() => {
    const age = localStorage.getItem("age")
    if (age === null) {
      setHideButton(false)
    }
    else {
      age != null ? localStorage.setItem('isVerified', hideButton) : "";
    }

  }, [hideButton]);

  const handlelogout = () => {
    localStorage.removeItem("isLoggedIn")
    return navigate("/login")

  }

  return (
    <div>
      <div>

        <details className='name1'>
          <summary className='name2'> profile </summary>
          <ul>
            {
              code.map((item, index) => (
                <div className='name' key={index}>
                  {"name :" + " " + item.username}<br />
                  {"age :" + " " + localStorage.getItem("age")}<br />
                  {"BOD :" + " " + localStorage.getItem("bod")}
                </div>
              ))
            }
            <button onClick={handlelogout}>Logout</button><br />
          </ul>
          <br />
        </details>
        <br />
      </div>
      <h1>Welcome to  Download Page</h1>
      <div className="image-container">

        <center>
          <img className='gta' src="https://videos-rockstargames-com.akamaized.net/screencaps/10998/en_us/1280.jpg" />
          <br />
          <video className='video' width="300" src='https://videos.rockstargames.com/v4/a8k183c8/flv/en-us-720p.mp4' controls>
          </video>
        </center>
        <br />

        <br />
      </div>
      {age === true ? age && <>
        <div className='age'>
          <center>
            <br />
            <label >BOD : </label>
            <input type='date' onChange={(e) => setBod(e.target.value)} />  <br />
            <br />
            <label for="inputfo">AGE : </label>
            <input className='inputfo' type='number' placeholder='Enter age' onChange={(e) => setyear(e.target.value)} /><br />
            <br />
            <button onClick={(e) => {
              handleadd(e)
              if (age === null) {
                return setHideButton(false)
              }
              else if (year >= 18) {
                setTimeout(() => {
                  window.location.href = "/home/download"
                }, 2000);
              }
              else {
                localStorage.getItem("age") <= 18 ? setHideButton(true) : "";
              }

            }}>Add</button>
          </center>
        </div>
      </> : ""}
      {!hideButton &&
        <div>
          {setAge === false ? "" : <button className='download1' onClick={(e) => handlesubmit(e)} >download</button>}
        </div>
      }
    </div>
  )
}

export default Home