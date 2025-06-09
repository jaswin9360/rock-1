
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main.copy'
import Login from './Login'
import Home from './Home'
import Register from './register'
import Download from './Download'
import PrivateRoute from './PrivateRoute';
import UpiSection from './UpiSection'
import UserPage from './UserPage'
import GamePage from './GamePage'


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