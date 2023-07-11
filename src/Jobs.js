import React, { useEffect, useState } from "react";
import Company from "./Company";
import axios from "axios";
import Navbar from "./Navbar";
import loading from "./holdon.gif";
const Jobs=()=>{
    const [Loading,SetLoading]=useState(false);
    const [data,SetData]=useState([]);
    
    useEffect(()=>{
        SetLoading(true);
        axios.get("https://placement-backend-l8ci.onrender.com/api/company/all").then((out)=>{
            SetData(out.data);
            SetLoading(false);
            console.log(out.data.reverse());
            
        }).catch(err=>alert("Network Error"))
    },[])
    return(
        <>
<Navbar/>
     <h1 style={{
        fontSize:"2.5rem",
        fontWeight:"bolder",
        textAlign:"center",
        marginTop:"10px"
     }}><u>On Campus</u></h1>
     <div className="container my-12 mx-auto px-4 md:px-12">
    {
        !Loading?<div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
            data.map((item,index)=>{
                return(
                    <Company Image={item.Image} Name={item.Name} Date={item.LastDate} Link={item.Link} Details={item.Details}/>
                )
            })
        }
     
    </div>:<div style={{textAlign:"center"}}><img src={loading} style={{display:"block", marginLeft:"auto",marginRight:"auto"}}/><br/><b >Occasional loading delays may occur due to our utilization of a free server</b></div>
    }
    {/* <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {
            data.map((item,index)=>{
                return(
                    <Company Image={item.Image} Name={item.Name} Date={item.LastDate} Link={item.Link} Details={item.Details}/>
                )
            })
        }
     
    </div> */}
</div>
        </>
    )
}
export default Jobs;