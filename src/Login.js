import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "./Services/firebase";
import './App.css';
import { useEffect, useState, useSyncExternalStore } from "react";
import image from "./placement.png";
import TaskNavbar from "./TaskNavbar";
const Login = () => {
  const [value,setValue]=useState('');
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((res)=>{
      setValue(res.user.email);
      localStorage.setItem("email",res.user.email);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem("email"));
  })
  return (
    <div style={{textAlign:"center",marginTop:"10vh"}}>
   
  <img src={image} style={{display:"block",marginLeft:"auto",marginRight:"auto",scale:'0.8' }}/>
      {value!==null&&value.includes("@rknec.edu")?window.location.href="jobs":
      <button className="button" onClick={signInWithGoogle} style={{backgroundColor:"#5A96E3",color:"white",height:"35px", width:"200px",borderRadius:"10px",paddingBottom:"2px"}}><i className="fab fa-google"></i>Sign in with Rknec Mail</button>
  }
  <br/>
  <br/>
  <p> <span style={{fontWeight:"bolder"}}>Note</span> : Non rknec.edu mails won't work</p> 
      </div>
  )
}
export default Login;