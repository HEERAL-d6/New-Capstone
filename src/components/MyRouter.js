import {BrowserRouter , Routes , Route} from "react-router-dom"
import React from 'react'
import Navbar from "./Navbar"
import Signup from "./Signup"
import Home from "./Home"
import Login from "./Login"
export default function MyRouter() {
    
  return (
    
    <div>
        
        <BrowserRouter>
           
           <Routes>
              <Route element={<Home/>} path="/" />
              <Route element={<Login/>} path="/login" />
              <Route element={<Signup/>} path="/signup" /> 
              {/* <Route element={<Judgedash/>} path="/judge"/>  */}
              
           </Routes>
           </BrowserRouter>
           
    </div>
    
  )
}
