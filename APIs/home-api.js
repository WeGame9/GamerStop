const exp=require("express")
const expressAsyncHandler=require("express-async-handler")
const homeApi=exp.Router()

homeApi.get("/getSpecialOffers",expressAsyncHandler(async (req,res,next)=>
{
       let specialOffersObj=res.app.get("specialOffersObj")
       let specialOffers= await specialOffersObj.find().toArray()
       res.send({message:"special offers data",specialOffers:specialOffers})
})
)

homeApi.get("/getRecentlyAddedGames",expressAsyncHandler(async (req,res,next)=>
{
       let recentlyaddedCollectionObj=res.app.get("recentlyaddedCollectionObj")
       
       let recentlyAdded= await recentlyaddedCollectionObj.find().toArray()
       res.send({message:"recently added games data",recentlyAdded:recentlyAdded})
})
)

homeApi.get("/getFeaturedGames",expressAsyncHandler(async (req,res,next)=>
{
       let featuredaddedCollectionObj=res.app.get("featuredaddedCollectionObj")
       let featuredGames= await featuredaddedCollectionObj.find().toArray()
       res.send({message:"featured games data",featuredGames:featuredGames})
})
)

homeApi.get("/getRecommendedGames",expressAsyncHandler(async (req,res,next)=>
{
       let recommendedCollectionObj=res.app.get("recommendedCollectionObj")
       let recomendGames= await recommendedCollectionObj.find().toArray()
       res.send({message:"recommended data",recomendGames:recomendGames})
})
)
   

module.exports=homeApi
