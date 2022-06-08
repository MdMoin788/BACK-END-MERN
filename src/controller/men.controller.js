const express = require("express")
const Mens = require("../model/men.model")
const authenticate = require("../middleware/authenticate")
const authorised = require("../middleware/authorise")

const router  = express.Router()


router.post("/", async(req,res)=>
{
    
    try{
        const mens = await Mens.create(req.body)
        return res.status(201).send(mens)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
  

})

// router.patch("/:id",authenticate,authorised(["admin", "user"]),async(req,res)=>{
    
//      try {
//          const products= await Products.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//        return  res.status(201).send(products)
//      } catch (error) {
//          return res.status(500).send({error:error.message})
//      }
//   })


  router.get("",async(req,res)=>{
    
    try {
        if(req.query.category==undefined){

            const mens= await Mens.find().lean().exec();
            return  res.status(201).send(mens)
        }
     else{

        const mens= await Mens.find({category:req.query.category}).lean().exec();
        return  res.status(201).send(mens)
     }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })




  router.get("",async(req,res)=>{
    // req. query. color2 === 'blue'
    try {
        
        const mens= await Mens.find({category:req.query.category}).lean().exec();
      return  res.status(201).send(mens)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })




  router.get("/sortasc",async(req,res)=>{
    // req. query. color2 === 'blue'
    try {
        const mens= await Mens.find().sort({price:1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })
 
   

  router.get("/sortdesc",async(req,res)=>{
    // req. query. color2 === 'blue'
    try {
        const mens= await Mens.find().sort({price:-1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 });



 router.get("/:id", async (req, res) => {
  // req. query. color2 === 'blue'
  try {
    const mens = await Mens.findById({_id:req.params.id}).lean().exec();
    return res.status(201).send(mens);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});




module.exports = router
