const express = require("express")
const router = express.Router()
const authenticate = require("../middleware/authenticate")
const Admin = require("../model/admin.model")
router.get ("/", authenticate, async (req, res )=>{
    try{
        const admin = await Admin.find().lean().exec()
        return res.status(201).send(admin)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})

router.post ("/", async (req, res )=>{
    try{
        const admin = await Admin.find().lean().exec()
        return res.status(201).send(admin)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
})
module.exports = router