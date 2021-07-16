const jwt=require("jsonwebtoken")
const checkToken=(req,res,next)=>{
    let tokenB=req.headers.authorization;
    if(tokenB!=undefined)
    {
        let token=tokenB.split(" ")[1]
        if(token==undefined)
        {
            return res.send({message:"unauthorized access"})
        }
        else
        {
            jwt.verify(token,"GaMeRsToP",err=>{
                if(err)
                  {
                      return res.send({message:"session expired"})
                  }
                  else
                  {
                      next()
                  }
            })
        }
    }
}
module.exports=checkToken