/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { NoteState } from "../Context/appContext";
import { getUserNotes, NotesDelete } from "../helper/helper";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditPage from "./EditPage";


const Profile =()=>{
     const navigate=useNavigate();
  const [allNotes,setAllNotes]=useState([]);
          const[err,setErr]=useState("")
          const [msg,setMsg]=useState("");
          const {token}=NoteState();
          useEffect(()=>{
              getUserNotes(token).then((data)=>{
                  if(data.error){
                     setErr(data.err)
                  }
                  else{
                      setAllNotes(data.data)
                  }
              })
          },[])
function editFn(id){
    navigate(`/user/edit/${id}`)
}
const deleted=(id)=>{
NotesDelete(token,id).then((data)=>{
    console.log("id",id,token)
      if(data.error){
         console.log("No data detail",data.error);
         setErr(data.error);
         setMsg("")
      }
      else{
        console.log("delete",data.message);
        navigate("/home")
         setErr("")
         setMsg(data.data)
      }
   }).catch((err)=>console.log(err))

}
          return(
          <Base>
         
        <div>
        <div className="profile-add">
        <button onClick={()=>navigate("/user/add")} className="add">ADD Notes</button>
        </div>
        <div className="profile">
        {allNotes ?. map((data,idx)=>(
          <Paper elevation={6} key={idx} className="card">
  <h2 className="title">{data.title}</h2>
  <p>{data.content}</p>
  <button className="edit" onClick={()=>navigate(`/user/edit/${data._id}`)}>EDIT</button>
  <button className="delete" onClick={(e)=>deleted(data._id)}>DELETE</button>
          </Paper>
  ))}
  </div>
  </div>
          </Base>
      )
  }
  


export default Profile;