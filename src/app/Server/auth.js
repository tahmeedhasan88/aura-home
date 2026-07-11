"use server";

import { collections, dbConnect } from "../lib/dbConnect";
import bcrypt from "bcryptjs";

const normalizeEmail = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
};

const buildEmailQuery = (value) => {
  const normalizedEmail = normalizeEmail(value);
  return {
    email: {
      $regex: new RegExp(`^${normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"),
    },
  };
};

export const postUser = async (payload) => {

const { email, password, name } = payload;
//check payload 
if(!email || !password) return null;

const normalizedEmail = normalizeEmail(email);

//check user 
const isExist = await dbConnect(collections.USERS).findOne(buildEmailQuery(normalizedEmail));

//create user 
const newUser = {
    name, 
    email: normalizedEmail,
    password: await bcrypt.hash(password, 14),
    role: "user",
    
}

//insert user 
const result = await dbConnect(collections.USERS).insertOne(newUser);

if(result.acknowledged) return {

    ...result, insertedId: result.insertedId.toString(),

};



}




export const loginUser = async (payload) => {

const { email, password } = payload;
if(!email || !password) return null;

const normalizedEmail = normalizeEmail(email);
const user = await dbConnect(collections.USERS).findOne(buildEmailQuery(normalizedEmail));

if(!user) return null;

const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
        return user;
    }
    else{
        return null;}

    }