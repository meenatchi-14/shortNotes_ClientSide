import { BaseUserAPI } from "./API"

export const signupUser= async(userInfo)=>{
    try {
        const res=await fetch(`${BaseUserAPI}/signup`,{
         method:"POST",
         body:JSON.stringify(userInfo),
         headers:{
            "Content-Type": "application/json",
         }, 
        });
        const data=res.json();
         return data;
    } catch (error) {
        return error;
    }
}



export const loginUser=async(userInfo)=>{
    try {
        const res =await fetch(`${BaseUserAPI}/login`,{
         method:"POST",
         body:JSON.stringify(userInfo),
         headers:{
            "Content-Type":"application/json",
         }, 
        })
        const data=res.json();
         return data;
    } catch (error) {
        return error;
    }
}