import React from "react";
const Company=(props)=>{
    return(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  <article className="overflow-hidden rounded-lg shadow-lg">

<a href="">
    <img alt="Placeholder" className="block h-auto w-full" src={props.Image} style={{height:"184.5px",width:"400px"}}/>
</a>
<hr/>
<header className="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 className="text-lg">
        <a className="no-underline hover:underline text-black" href="#">
           <b>Company</b>: <br/> {props.Name}
        </a>
    </h1>
   
    <p className="text-grey-darker text-sm">
       <b>Tentative Date</b>:<br/> {props.Date}
    </p>
    <br></br>
  
</header>
<br/>
<h1 style={{marginLeft:"10px",marginRight:"10px"}}>
        <b>Details</b>:
        {props.Details}
    </h1>
    <br/>
<footer className="flex items-center justify-between leading-none p-2 md:p-4">
    <a className="flex items-center no-underline hover:underline text-black" href="#">
        
        <p className="ml-2 text-sm">    
        <span className="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl" onClick={()=>{
            if(props.Link!=""){
                console.log(props.Link);
                window.open(props.Link,"_blank");
            }
        }}> {props.Link===""?"Coming Soon":"Apply"} </span>
        </p> 
      

    </a>
    <br/>
    <br/>
</footer>

</article>
<br/>
        </div>
    )
  
}
export default Company;