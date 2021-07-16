const exp=require('express')
const userApi=exp.Router();
const jwt=require("jsonwebtoken")
const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require("express-async-handler")

const multerObj=require("./middlewares/multerCloudinaryUser")

userApi.use(exp.json())

const checkToken=require('./middlewares/verifyToken')

userApi.post("/register",multerObj.single('photo'),expressAsyncHandler(async (req,res,next)=>{
     

    let newUser=JSON.parse(req.body.userObj);
 
    let usersCollectionObj=res.app.get("usersCollectionObj")
    let user=await usersCollectionObj.findOne({$or:[{username:newUser.username},{email:newUser.email}]})
   // let user1=await usersCollectionObj.findOne({user})
    if(user!==null)
    {
        if(user.username==newUser.username && user.email==newUser.email)
          res.send({message:"username and email id already exists"})
        else if(user.username==newUser.username)
          res.send({message:"username already exists"})
        else
          res.send({message:"emailId already exists"})
    }
    else
    {
           //hash password
           let hashedPassword = await bcryptjs.hash(newUser.password, 7)
           //replace password
           newUser.password = hashedPassword;
           //insert
           newUser.profileImage=req.file.path;
           delete newUser.photo;
           delete newUser.cpassword;
 
          await  usersCollectionObj.insertOne(newUser)
          res.send({message:"registration successfull"})
    }

}
))

userApi.post("/login",expressAsyncHandler(async (req,res,next)=>{

    let user=req.body
   
    let usersCollectionObj=res.app.get("usersCollectionObj")
    
    let userObj= await usersCollectionObj.findOne({username:user.username})

    if(userObj!==null)
    {
        let result= await bcryptjs.compare(user.password,userObj.password)
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

userApi.post("/addtocart",checkToken,expressAsyncHandler(async (req,res,next)=>{

      let newgameObj=req.body

     let userCartCollectObj=req.app.get("userCartCollectObj")

     let userCartObj=await userCartCollectObj.findOne({username:newgameObj.username})

     if(userCartObj==null)
     {
       let games=[];
        /*let game=  userCartObj.games.filter()          newgameObj.games['id']*/
       let game1=newgameObj.games;
       game1.count=1;
       games.push(newgameObj.games)
       /*console.log(newgameObj,"hola")*/
       let newuserCartObj={username:newgameObj.username,games,count:1}
       await userCartCollectObj.insertOne(newuserCartObj)
       res.send({message:"added to cart"})
     }
     else
     {
        let gamesp=userCartObj.games
        
        let ind=gamesp.findIndex(gameObj=>gameObj.id===newgameObj.games.id)
         if(ind==-1)
         {
          let game1=newgameObj.games;
          game1.count=1;
          userCartObj.games.push(newgameObj.games)
          userCartObj.count= userCartObj.count+1;
          await userCartCollectObj.updateOne({username:newgameObj.username},{$set:{...userCartObj}})
          res.send({message:"added to cart"})
         }
         else
         {
           let game1=gamesp[ind]
            game1.count=game1.count+1;
            userCartObj.games[ind]=game1
            userCartObj.count= userCartObj.count+1;
            await userCartCollectObj.updateOne({username:newgameObj.username},{$set:{...userCartObj}})
            res.send({message:"added to cart"})

         }


       
     }

}))

userApi.get("/getcartObj/:username",checkToken,expressAsyncHandler(async (req,res,next)=>{
  
  let userCartCollectObj=req.app.get("userCartCollectObj")
  let un=req.params.username

   let usercartObj= await userCartCollectObj.findOne({username:un})
    if(usercartObj==null)
    {
       res.send({message:"cart is empty"})
    }
    else{
       res.send({message:"cart objects found",usercartObj:usercartObj})
    }


}));

userApi.post("/updatecart",checkToken,expressAsyncHandler(async (req,res,next)=>{
  
        let UpdatcartObj=req.body
        let userCartCollectObj=req.app.get("userCartCollectObj")
        let usercartObj= await userCartCollectObj.findOne({username:UpdatcartObj.username})

        if(usercartObj!=null)
        {
           //usercartObj.games=Updatgames
           //console.log("CAME HERE >>>>>>>>>>>>>>>>>>>>>",UpdatcartObj)
           usercartObj.games=UpdatcartObj.games;
           usercartObj.count=UpdatcartObj.count
           await userCartCollectObj.updateOne({username:usercartObj.username},{$set:{...usercartObj}})
           res.send({message:"updated succcessfully"})
        }
}))


module.exports=userApi

/*  if(userCartObj==null)
     {
       let games=[];
          
       games.push(newgameObj.games)
       let newuserCartObj={username:newgameObj.username,games,count:1}
       await userCartCollectObj.insertOne(newuserCartObj)
       res.send({message:"added to cart"})
     }
     else
     {
        userCartObj.games.push(newgameObj.games)
        userCartObj.count= userCartObj.count+1;
        await userCartCollectObj.updateOne({username:newgameObj.username},{$set:{...userCartObj}})
        res.send({message:"added to cart"})
     } */