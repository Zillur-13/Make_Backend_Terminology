
import { dir } from "console";
import {DecodeToken,EncodeToken} from "../utility/tokenUtility.js";
import {dirname} from "path"
import path from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url)
let __dirname = dirname(__filename)
// ! Token Encode
export const TokenEncoded = async (req,res) =>{
    let result = EncodeToken("razillur2002@gmail.com","1234");
    res.json({token:result})
}

// ! Token Decode
export const TokenDecode = async (req,res) =>{
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhemlsbHVyMjAwMkBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMTIzNCIsImlhdCI6MTczMDY0NTYwOSwiZXhwIjoxNzMzMjM3NjA5fQ.s6Ku6rZGkQf6Q-iOgBqBsy7F8BtlKbhUtf2u1ILDdAo")

    res.json({token:result})
}


// ! set cookies....

export const createCookies = async(req,res) =>{

    let cookieOptions={
        expires:new Date(Date.now()+3600*1000),
        httpOnly:true,
        sameSite:true
    }

     let data = 'razillur2002@gmail.com'
     let cookiName = 'MERN07'

     res.cookie(cookiName,data,cookieOptions)

     res.json({status:'ok'});
}

// ! file upload....


export const myFileUpload = async(req,res) =>{

    let myVideo = req?.files?.myVideo;
    let myFileName = myVideo?.name;

    let myFilePath = path.join(__dirname, "../../uploads", myFileName);

  await  myVideo.mv(myFilePath, (err)=>{
        if(err){
            return {status: "fail"}
        }
    })
    return res.status(200).json({status:true})
}

