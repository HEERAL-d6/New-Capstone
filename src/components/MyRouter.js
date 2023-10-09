import {BrowserRouter , Routes , Route} from "react-router-dom"
import React from 'react'
import Navbar from "./Navbar"
import Signup from "./Signup"
import Home from "./Home"
import Login from "./Login"
import Sidebar from "./Sidebar"

export default function MyRouter() {
  return (
    <div>
        <BrowserRouter>
           <Navbar />
           <Routes>
              <Route element={<Home/>} path="/" />
              {/* <Route element={<Sidebar/>} path="/over"/> */}
              <Route element={<Login/>} path="/login" />
              <Route element={<Signup/>} path="/signup" />
              {/* <Route element={<Forgot />} path="/forgot" />
              <Route element={<Cakedetails />} path="/details/:cakeid" /> */}
           </Routes>
           </BrowserRouter>
    </div>
  )
}
