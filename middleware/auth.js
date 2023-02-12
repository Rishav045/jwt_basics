const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const authenticationMiddleware = async(req,res,next)=>{
    // console.log(req.headers.authorization)
    const authHeaders = req.headers.authorization;
    // console.log(authHeaders)
    if(!authHeaders || !authHeaders.startsWith('Bearer '))
    {
        throw new UnauthenticatedError('Token not found ')
    }

    const token = authHeaders.split(' ')[1];
    // console.log(token)
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decoded);
        const{id,username}=decoded;
        req.user = {id,username}
 

        next()
    } catch (error) {
        throw new UnauthenticatedError('Route has no authorized access ')
    }
}

module.exports=authenticationMiddleware