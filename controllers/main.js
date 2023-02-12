const {BadRequestError} = require('../errors')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
    const {username,password} = req.body
    if(!username || !password)
    {
        throw new BadRequestError('Please provide email and paassword')
    }
    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token})
}

const dashboard = async(req,res)=>{
    console.log(req.user)
    const user = req.user;
    const secret = Math.floor(Math.random()*100)
    res.status(200).json({'msg':`Hello ${user.username}`,'secret':`Your luckyNumber = ${secret}`})
}

module.exports = {login,dashboard}