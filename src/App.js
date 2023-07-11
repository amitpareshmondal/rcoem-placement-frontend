import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";

import TaskList from "./TaskList";
import './index.css';
import Login from './Login';
import Jobs from "./Jobs";
import { useEffect, useState } from 'react';
function App() {
const [va,SetVa]=useState("");
useEffect(()=>{
SetVa(localStorage.getItem("email"));
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
         
        </Route>
        {
          va!=null&&va.includes("rknec.edu")?<Route path="/jobs" element={<Jobs/>} />: <Route path="/jobs" element={<Login />}/>
        }
          {
          va!=null&&va.includes("rknec.edu")?<Route path="/tasks" element={<TaskList/>} />: <Route path="/tasks" element={<Login />}/>
        }
        
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
