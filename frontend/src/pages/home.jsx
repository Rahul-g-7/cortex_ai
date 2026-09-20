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
        <div>
            
        </div>
    );
}

export default Home;
