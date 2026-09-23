import React from 'react';
import Home from './pages/home';
import { useEffect } from 'react';
import getCurrentUser from './features/getCurrentUser.js';
function App () {
 useEffect(()=>{
    const getUser=async ()=>{
      await getCurrentUser()
    }
    getUser()
 },[])
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
