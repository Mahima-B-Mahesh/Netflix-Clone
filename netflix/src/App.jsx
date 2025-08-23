import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
        navigate('/');
      } else {
        // User is signed out
        console.log("User is signed out");
        navigate('/login');
      }
    });
  }, []);

  return (
    <>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  )
}

export default App
