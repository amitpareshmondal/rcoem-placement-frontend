import React, { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "./Tasks";
import TaskNavbar from "./TaskNavbar";
import loading from "./holdon.gif";
const TaskList=()=>{
    const [Loading,SetLoading]=useState(false);
    const [data,SetData]=useState([]);
    useEffect(()=>{
        SetLoading(true);
        axios.get("https://placement-backend-l8ci.onrender.com/api/Task/all").then((out)=>{
            SetData(out.data.reverse());
            SetLoading(false);
            console.log(data);
            console.log(out.data);
        }).catch(err=>alert("Network Error"))
    },[])
    return(
        <>
        <TaskNavbar/>
        <br/>
          <h1 style={{
        fontSize:"2rem",
        fontWeight:"bolder",
        textAlign:"center",
        marginTop:"10px"
     }}>Announcements</h1>
         <div class="container my-12 mx-auto px-4 md:px-12">

        

{
    !Loading?<div class="flex flex-wrap -mx-1 lg:-mx-4">
    {
        data.map((item,index)=>{
            return(
                <Tasks Title={item.Title} Details={item.Details} Link={item.Link} LastDate={item.LastDate}/>
            )
        })
    }
 
</div>:<div style={{textAlign:"center"}}><img src={loading} style={{display:"block", marginLeft:"auto",marginRight:"auto"}}/><br/><b >Occasional loading delays may occur due to our utilization of a free server</b></div>
}
        

</div>

        </>
    )
}
export default TaskList;