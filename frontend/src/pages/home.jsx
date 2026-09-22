import React from 'react';
import api from '../../utils/axios.js';
import { signInWithPopup } from 'firebase/auth';
import {auth,googleProvider} from '../../utils/firebase.js'

const Home = () => {
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
        <div className='h-screen flex bg-[#0d0f14] text-white overflow-hidden'>
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'>
                <button onClick={googleLogin}>google login</button>
            </div>
        </div>
    );
}

export default Home;
