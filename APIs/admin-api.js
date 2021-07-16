const exp=require('express')
const adminApi=exp.Router()
const expressAsyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")

adminApi.use(exp.json())


adminApi.get("/getadmindata",expressAsyncHandler(async (res,rep,next)=>{

    let adminCollectionObj=app.req.get("adminCollectionObj")

}))

adminApi.post("/login",expressAsyncHandler(async (req,res,next)=>{

    
    let user=req.body
   // console.log(req.body)
    let adminCollectionObj=res.app.get("adminCollectionObj")
    
    let userObj= await adminCollectionObj.findOne({username:user.username})

    if(userObj!==null)
    {
        let result=(user.password===userObj.password)
        if(result===false)
        {
             res.send({message:"Invalid password"})
        }
        else
        {
           let sToken=jwt.sign({username:user.username},'GaMeRsToP',{expiresIn:"2d"})
           res.send({message:"login successfull",userObj:userObj,token:sToken,username:user.username})
        }
    }
    else{
        res.send({message:"Invalid user"})
    }


}))

adminApi.post("/addgame",expressAsyncHandler(async (req,res,next)=>{

    let gameObj=req.body
    let gamesCollectionObj=res.app.get("gamesCollectionObj")

    let FoundGame= await gamesCollectionObj.findOne({id:gameObj.id})

    if(FoundGame==null)
    {
         await gamesCollectionObj.insertOne(gameObj)
         res.send({message:"added successfully"})
    }
    else{
         res.send({message:"game already present"})
    }

}))

adminApi.get("/getusersdata",expressAsyncHandler(async (req,res,next)=>{

      let usersCollectionObj=res.app.get("usersCollectionObj")

      let users=await usersCollectionObj.find().toArray()

      if(users!=null)
      {
          res.send({message:"users data",users:users})
      }
      else
      {
          res.send({message:"no user found"})
      }
}))


adminApi.delete("/deleteuser/:username",expressAsyncHandler(async (req,res,next)=>{
       
    let un=req.params.username
    let usersCollectionObj=res.app.get("usersCollectionObj")

    
    let user=await usersCollectionObj.findOne({username:un})

    console.log(req.params.username,user)
    if(user==null)
    {
        res.send({message:"user not existed"})
    }
    else{
        await usersCollectionObj.deleteOne({username:un})
        res.send({message:"user removed"})
    }
}))

module.exports=adminApi