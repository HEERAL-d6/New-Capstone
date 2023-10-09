import React from 'react'
import { Link } from 'react-router-dom';

/* src/index.css (or your preferred CSS file) */



 function Navbar() {
 
  return (
    <div>
    <nav style={{backgroundColor:"light"}} data-bs-theme="dark"  className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Link to="/"><a className="navbar-brand" href="">Hackathon</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
     
      </ul>
      
      <div className="d-flex">
      <Link to="/login"><button className="btn btn-primary me-2" type="button" style={{ border: 'none' }}>Login</button></Link>
        <Link to="/Signup"><button className="btn btn-danger" type="button" style={{ border: 'none' }}>Signup</button></Link>
        {/* <button className="btn btn-primary" type="button">Signup</button> */}
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
export default Navbar;
