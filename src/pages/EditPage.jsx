
import { TextField } from "@mui/material"
import { useState } from "react"
import {NotesUpdate} from "../helper/helper"
import '../App.css'
import { Base } from "../Base/Base"
import { NoteState } from "../Context/appContext"
import { useNavigate } from "react-router-dom"
const EditPage=()=>{
const [title,setTitle]=useState("")
const [content,setContent]=useState("") 
const [msg,setMsg]=useState("");
const [err,setErr]=useState("")
 const {token}=NoteState();
    const navigate=useNavigate();
const handleUpdate=()=>{
   const updateNotes={
      title,
      content
   }
   NotesUpdate(updateNotes,token).then((data)=>{
    console.log("id")
      if(data.error){
         console.log("No data entering",data.error);
         setErr(data.error);
         setMsg("")
      }
      else{
        console.log("add",data.data);
        navigate("/profile")
         setErr("")
         setMsg(data.data)
      }
   }).catch((err)=>console.log(err))
};

    return(
        <Base>
      <div className="register">
        <div className="forms">
           <TextField
            id="outlined-basic" 
           label="Title"
            variant="outlined"
             value={title} 
             onChange={(e)=>setTitle(e.target.value)} />
           
           <TextField
            label="Content"
             variant="outlined" 
             value={content} 
             onChange={(e)=>setContent(e.target.value)} />
     

           <button onClick= {(e)=>handleUpdate(e.target._id)}  className="add">update Note
</button>
           <div>
           <div style={{color:"teal"}}>{msg ? msg:""}</div>
           <div style={{color:"crimson"}}>{err ? err:""}</div>
           </div>
        </div>
        </div>
        </Base>
      )
 }

 export default EditPage