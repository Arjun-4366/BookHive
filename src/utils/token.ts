import jwt,{Secret,SignOptions} from "jsonwebtoken"

const generateToken = (id:number):string=>{
const secret:Secret = process.env.JWT_SECRECT || ''
const options:SignOptions = {expiresIn:'60d'}

return jwt.sign({id},secret,options)
}
module.exports = generateToken