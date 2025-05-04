
import { TextField } from "@mui/material"
import { useState } from "react"
import {NotesAdd} from "../helper/helper"
import '../App.css'
import { Base } from "../Base/Base"
import { NoteState } from "../Context/appContext"
import { useNavigate } from "react-router-dom"
const AddPage=()=>{
const [title,setTitle]=useState("")
const [content,setContent]=useState("") 
const [msg,setMsg]=useState("");
const [err,setErr]=useState("")
 const {token}=NoteState();
    const navigate=useNavigate();
const handleAdd=()=>{
   const newNotes={
      title,
      content
   }
   NotesAdd(newNotes,token).then((data)=>{
    console.log(newNotes)
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
     

           <button onClick= {()=>handleAdd()}  className="add">Add Notes
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

 export default AddPage