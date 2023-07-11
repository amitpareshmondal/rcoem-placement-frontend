import React from "react";
const Tasks=(props)=>{
    return(
        <>
      
        <div class="my-1 px-1 w-full md:w-full lg:my-full lg:px-4 lg:w-full">
  <article class="overflow-hidden rounded-lg shadow-lg">

{/* <a href="#">
    <img alt="Placeholder" class="block h-auto w-full" src={props.Image}/>
</a> */}
<hr/>
<header class="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 class="text-lg">
        <a class="no-underline hover:underline text-black" href="#">
           <b>Announcement</b>: <br/> 
           
        </a>
        <span class="text-sm"> {props.Details}  </span>
       
    </h1>
   
    
</header>

<footer class="flex items-center justify-between leading-none p-2 md:p-4">
    <a class="flex items-center no-underline hover:underline text-black" href="#">
        
        <p class="ml-2 text-sm">    
        <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl" onClick={()=>{
            if(props.Link!=""){
                console.log(props.Link);
                window.open(props.Link,"_blank");
            }
        }}> {props.Link===""?"N.A":"Link"} </span>
        </p> 
      

    </a>
    <br/>
    <br/>
</footer>

</article>
<br/>
        </div>
        </>
    )
  
}
export default Tasks;