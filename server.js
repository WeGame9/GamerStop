const exp=require("express")
const path = require("path")
const expressAsyncHandler= require("express-async-handler")
const app=exp()

app.use(exp.static(path.join(__dirname,'./dist/GamerStop')))

const homeApi=require('./APIs/home-api')
const userApi=require('./APIs/user-api')
const adminApi=require('./APIs/admin-api')
app.use("/home",homeApi)
app.use("/user",userApi)
app.use("/admin",adminApi)

app.use(exp.json()) 
const mc=require('mongodb').MongoClient;

//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority" 
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"
const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"

//const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"

let specialOffersObj;
let recentlyaddedCollectionObj;
let featuredaddedCollectionObj;
let recommendedCollectionObj;
let usersCollectionObj;
let userCartCollectObj;
let adminCollectionObj;
let gamesCollectionObj;
//connect to database
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err)
    {
        console.log("err in Gamerpower connection",err)
    }
    else{
        databaseObj=client.db("GamerStop")
        specialOffersObj=databaseObj.collection("Home_row1")
        app.set("specialOffersObj",specialOffersObj);
        recentlyaddedCollectionObj=databaseObj.collection("RecentlyAdded")
        app.set("recentlyaddedCollectionObj",recentlyaddedCollectionObj)
        featuredaddedCollectionObj=databaseObj.collection("FeaturedGames")
        app.set("featuredaddedCollectionObj",featuredaddedCollectionObj)
        console.log("connected to database  ಠ_ಠ  :)")
        recommendedCollectionObj=databaseObj.collection("RecommendedGames")
        app.set("recommendedCollectionObj",recommendedCollectionObj)
        usersCollectionObj=databaseObj.collection("user_Collection")
        app.set("usersCollectionObj",usersCollectionObj)
        userCartCollectObj=databaseObj.collection("usercart_Collection")
        app.set("userCartCollectObj",userCartCollectObj)
        adminCollectionObj=databaseObj.collection("admin_Collection")
        app.set("adminCollectionObj",adminCollectionObj)
        gamesCollectionObj=databaseObj.collection("Games_Collection")
        app.set("gamesCollectionObj",gamesCollectionObj)
    }
})


app.post("/addHomeRow",expressAsyncHandler(async (req,res,next)=>{

    //console.log(req.body)
    await specialOffersObj.insertOne(req.body);
    res.send({message:"succesfully inserted the row item"})

}))

app.post("/addRecentlyAdded",expressAsyncHandler(async (req,res,next)=>{

    //console.log("recently added items",req.body)
    await recentlyaddedCollectionObj.insertOne(req.body)
    res.send({message:"succesfully inserted the row item (recently added)"})

}))

app.post("/addFeaturedGames",expressAsyncHandler(async (req,res,next)=>{

    await featuredaddedCollectionObj.insertOne(req.body)
    res.send({message:"succesfully inserted the row item (featured games)"})
}))

app.post("/addRecommendedGames",expressAsyncHandler(async (req,res,next)=>{

   // let recommendedCollectionObj=res.app.get("recommendedCollectionObj")
    await recommendedCollectionObj.insertOne(req.body)
    res.send({message:"succesfully inserted the row item (Recommended games)"})
}))

const port=3000;
app.listen(port,res=>{console.log(`server is listening on ${port} successfully`)})