import { createSlice } from "@reduxjs/toolkit";

const conversationSlice=createSlice({
    name:"conversation",
    initialState:{
        consversations:[],
    },
    reducers:{
        setUserdata:(state,action)=>{
            state.setUserData=action.payload
        }
    }
})

export const {setUserdata}=userSlice.actions
export default userSlice.reducers
