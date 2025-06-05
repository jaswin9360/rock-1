import React from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/register'
import Download from './Components/Download'
import Subscription from './Components/Subscription'
import PrivateRoute from './PrivateRoute';
// import axios from 'axios'
// import Home from './Components/Home'

function App () {

  const  isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
   isLoggedIn ? <Navigate to="/"/> : <Navigate to="/home" />
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/home/download"
          element={
            <PrivateRoute>
              <Download />
            </PrivateRoute>
          }
        />
        <Route
          path="/home/download/subscription"
          element={
            <PrivateRoute>
              <Subscription />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};



export default App