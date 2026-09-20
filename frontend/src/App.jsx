import React from 'react';
import {auth, googleProvider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import api from '../utils/axios';

const App = () => {
  const hanldeLogin=async(token)=>{
    try {
     const {data}= await api.post("/auth/login",{token})
     console.log("what is this ",data)
    } catch (error) {
      console.log(error)
    }
  }
  const googleLogin=async()=>{
  const data= await signInWithPopup(auth,googleProvider)
  const token=await data.user.getIdToken()
  console.log(token)
  await hanldeLogin(token)
  console.log(data) 
  }
  return (
    <div className='bg-gray-900 flex items-center justify-center h-screen'>
      <button onClick={googleLogin} className='bg-white text-blue-500 px-6 py-2.5 rounded-lg shadow-md flex items-center gap-2 border border-gray-300 cursor-pointer'>Continue with google</button>
    </div>
  );
}

export default App;
