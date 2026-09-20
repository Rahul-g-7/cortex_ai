import React from 'react';
import {auth, googleProvider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const googleLogin=async()=>{
  const data= await signInWithPopup(auth,googleProvider)
  console.log(data) 
  }
  return (
    <div className='bg-gray-900 flex items-center justify-center h-screen'>
      <button onClick={googleLogin} className='bg-white text-blue-500 px-6 py-2.5 rounded-lg shadow-md flex items-center gap-2 border border-gray-300 cursor-pointer'>Continue with google</button>
    </div>
  );
}

export default App;
