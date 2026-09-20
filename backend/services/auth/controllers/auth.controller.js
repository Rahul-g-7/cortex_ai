import {getAuth} from "firebase-admin/auth"
import { app } from "../config/firebase.js";
import User from "../models/user.model.js";
export const login = async(req, res) => {
    try {
        const {token}=req.body;
        const decoded=await getAuth(app).verifyIdToken(token)
        let user=await User.findOne({firebaseUid:decoded.uid})
        if (!user) {
            user=await User.create({
                firebaseUid:decoded.uid,
                email:decoded.email,
                name:decoded.name,
                avatar:decoded.picture
            })
        }
        const sessionID=crypto.randomUUID();
        res.cookie("session",sessionID,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
        })
        return res.status(200).json({message:"Login successful",user})
        
    }

    catch(error){
        console.log(error)
        return res.status(500).json({message:`login error ${error}`})
    }
}

