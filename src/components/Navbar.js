import React from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router';


 function Navbar() {
   
  return (
    <div>
    <nav style={{backgroundColor:"light"}} data-bs-theme="dark"  className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Link to="/"><a className="navbar-brand" href="">Hackathon</a></Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
     
      </ul>
      
      <div className="d-flex">
       <Link to="/login"><button className="btn btn-primary me-2" type="button" style={{ border: 'none' }}>Login</button></Link>
        <Link to="/Signup"><button className="btn btn-danger" type="button" style={{ border: 'none' }}>Signup</button></Link>
        {/* {isloggedin==true && <button onClick={logout} className="btn btn-danger" type="button">Logout</button>} */}
        
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
export default Navbar;
