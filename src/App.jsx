import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/register'

// import axios from 'axios'
// import Home from './Components/Home'

function App () {
    
  return (
    <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/register/login" element={<Login/>} />
            <Route path="register/login/home" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App