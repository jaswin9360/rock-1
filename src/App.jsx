
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/register'
import Download from './Components/Download'
import PrivateRoute from './PrivateRoute';
import UpiSection from './Components/UpiSection'
import UserPage from './Components/UserPage'
import GamePage from './Components/GamePage'


function App() {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />

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
              <UpiSection />
            </PrivateRoute>
          }
        />
        <Route
          path="/home/download/subscription/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      <Route
        path="/home/download/subscription/user/game"
        element={
          <PrivateRoute>
            <GamePage />
          </PrivateRoute>
        }
      />
      </Routes>
    </BrowserRouter>
  );
};



export default App