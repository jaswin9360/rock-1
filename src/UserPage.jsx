import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from './LoadingSpinner';

function UserPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(100000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);


  useEffect(() => {
    const name = prompt("Please enter your  payment name:");
    if (name) {
      setUserName(name);
      async function data() {
        const res = await axios.post("https://user-backend-0exo.onrender.com/user/details", { username: name })
        console.log(res)
      }
      data()
    } else {
      alert("Name is required to continue.");
      navigate("/home/download/subscription/");
    }

  }, []);

  const handleCheckAndNavigate = async () => {

    try {
      const res = await axios.get("https://user-backend-0exo.onrender.com/api/check-permission", {
        withCredentials: true,
      });
      setLoading(true)
      setTimeout(() => {
        if (res.data.allowed) {
          window.location.href = "/home/download/subscription/user/game"
          alert("Access granted.");
        } else {
          alert("Access denied. Please wait for admin approval.");
        }
      }, 100000)
    } catch (err) {
      alert("Error checking permission.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Page</h1>
      <p>Welcome, <strong>{userName}</strong></p>
      <div>
        <h2 className='second'>Time left: {secondsLeft} sec</h2>
      </div>
      {loading ? <LoadingSpinner /> : ""}
      <button onClick={
        handleCheckAndNavigate
      }>Check Permission</button>
    </div>
  );
}

export default UserPage;

