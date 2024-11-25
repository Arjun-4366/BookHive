import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import connectToDB from "../db";
import User from "../db/schemas/user";
import path from "path";

const JWT_SECRET = process.env.JWT_SECRECT

export async function POST(req:Request):Promise<NextResponse>{
    const {pathname} = new URL(req.url)

   if(pathname.endsWith('/register')){
    return await regUser(req)
   }
   if(pathname.endsWith('/login')){
    return await loginUser(req)
   }

   return NextResponse.json({message:"Invalid request"},{status:404})
}

