import redis from '../../shared/redis/redis.js'
const protect=async(req,res,next)=>{
    try{
        const sessionID=req.cookies?.session
        if (!sessionID) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          const session=await redis.get(`session:${sessionID}`)
          if (!session) {
            return res.status(401).json({ message: 'session expired' });
          }
          req.user=JSON.parse(session)
          next()
    }
    catch(err){
      return res.status(500).json({message:"protect error ${err} "})
      
    }
  }
  export default protect