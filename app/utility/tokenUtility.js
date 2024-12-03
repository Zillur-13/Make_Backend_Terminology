import {JWT_EXPIRATION_TIME,JWT_SECRET} from "../config/config.js"
import jwt from 'jsonwebtoken';


// ! Token Encode
export const EncodeToken = (email,user_id) =>{

    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = { email, user_id };
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

// ! Token Decode
export const DecodeToken = (token) =>{
    try{
       return jwt.verify(token,JWT_SECRET)
    }catch(e){
      return null;
    }
}

