/* eslint-disable react-refresh/only-export-components */
import { BaseUserAPI,BaseNotesAPI } from "./API"
export const signupUser = async(userInfo)=>{
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

export const getAllNotes=async(token)=>{
    try {
        const res=await fetch(`${BaseNotesAPI}/all`,{
            method:"GET",
            headers:{
                "x-auth-token":token,
                "Content-Type":"application/json",
            }
         })
         const data=await res.json();
         return data;
        
    } catch (error) {
        return error;
    }
 
}  
export const getUserNotes=async(token)=>{
    try {
        const res=await fetch(`${BaseNotesAPI}/user/all`,{
            method:"GET",
            headers:{
                "x-auth-token":token,
                "Content-Type":"application/json",
            }
         })
         const data=await res.json();
         return data;
        
    } catch (error) {
        return error;
    }
 
}         

export const NotesAdd=async(newNotes,token)=>{
    try {
        const res=await fetch(`${BaseNotesAPI}/add`,{
            method:"POST",
            body:JSON.stringify(newNotes),
            headers:{
                "x-auth-token":token,
                "Content-Type":"application/json",
            }
         })
         const data=res.json();
         
         return data;
        
    } catch (error) {
        return error;
    }
}


export const NotesUpdate=async(editNotes,token,_id)=>{
    try {
        console.log(editNotes,token)
        const res=await fetch(`${BaseNotesAPI}/edit/${_id}`,{
            method:"PUT",
            body:JSON.stringify(editNotes),
            headers:{
                "x-auth-token":token,
                "Content-Type":"application/json",
            }
         })
         const data=res.json();
         
         return data;
        
    } catch (error) {
        return error;
    }
}
export const NotesDelete=async(token,_id)=>{
    try {
        console.log(token,_id)
        const res=await fetch(`${BaseNotesAPI}/delete/${_id}`,{
            method:"DELETE",
            headers:{
                "x-auth-token":token,
                "Content-Type":"application/json",
            }
         })
         const data=res.json();
         
         return data;
        
    } catch (error) {
        return error;
    }
}