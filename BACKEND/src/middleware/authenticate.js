const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (token) =>
{
    return new Promise((resolve ,reject)=>
    {
        var decoded = jwt.verify(token,process.env.Secret_key,(err,decoded)=>
        {
            if(err) return reject(err);
    
            return resolve(decoded)
        })
    })
    
}

const authenticate = async(req,res,next)=>
{
    if(!req.headers.authorization)
    return res.status(400).send({message:"authorization token not found"})
    
    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message:"authorization token not found or incorrect"})
const token = req.headers.authorization.trim().split(" ")[1]
let decoded;
try{
         decoded = await verifyToken(token)
}

catch(err)
{
    return res.status(400).send({message:"authorization token not found or incorrect"})
}

req.user = decoded.user  //verfied tokn
return next()
}


module.exports =authenticate
