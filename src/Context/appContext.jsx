/* eslint-disable react/prop-types */
import { useContext, useEffect ,createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

const NotesCtx=createContext(null);
const AppProvider=({children})=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/",{replace:true});
        }
    },[navigate]);
    const[token,setToken]=useState("")
    return(
        <div>
       <NotesCtx.Provider value={{token,setToken}}>{children}</NotesCtx.Provider>
        </div>
    )
}
export const NoteState=()=>{
    return useContext(NotesCtx);
}
export default AppProvider;