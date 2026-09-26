import api from "../../utils/axios.js"
export const createConversation =async ()=>{
    try {
        const {data}=await api.get("/api/chat/get-conversations")
        console.log(data    )
    } catch (error) {
        console.log(error)
    }
}