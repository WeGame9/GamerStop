const exp=require("express")
const path = require("path")
const expressAsyncHandler=require("express-async-handler")
const app=exp()

app.use(exp.static(path.join(__dirname,'./dist/GamerStop')))


app.use(exp.json()) 
const mc=require('mongodb').MongoClient;

//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority" 
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"
const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"

//const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"

let addCollectionObj;
//connect to database
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err)
    {
        console.log("err in Gamerpower connection",err)
    }
    else{
        databaseObj=client.db("GamerStop")
        addCollectionObj=databaseObj.collection("Home_row1")
       // usercartCollectionObj=databaseObj.collection("usercart_Collection")
        console.log("connected to database  ಠ_ಠ  :)")
    }
})


app.post("/addHomeRow",expressAsyncHandler(async (req,res,next)=>{

    console.log(req.body)
    await addCollectionObj.insertOne(req.body);
    res.send({message:"succesfully inserted the row item"})

}))


const port=3000;
app.listen(port,res=>{console.log(`server is listening on ${port} successfully`)})