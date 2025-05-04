/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import Paper from '@mui/material/Paper';
import { NoteState } from "../Context/appContext";
import { getAllNotes } from "../helper/helper";

const DashBoard =()=>{
     const [allNotes,setAllNotes]=useState([]);
        const[err,setErr]=useState("")
        const {token}=NoteState();
        useEffect(()=>{
            getAllNotes(token).then((data)=>{
                if(data.error){
                   setErr(data.err)
                }
                else{
                    setAllNotes(data.data)
                }
            })
        },[])
        return(
        <Base>
      <div className="home">
      {allNotes ?. map((data,idx)=>(
        <Paper elevation={6} key={idx} className="paper">
<h2 className="title">{data.title}</h2>
<p>{data.content}</p>
<p > <span className="write">Written by:</span>
<h3 className="name">{data.user.name}</h3>
</p>
        </Paper>
))}
</div>
        </Base>
    )
}

export default DashBoard;