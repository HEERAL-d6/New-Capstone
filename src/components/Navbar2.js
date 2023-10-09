import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export default function Navbar2() {
  const navigate = useNavigate();

  function Logout() {
    // Clear the accessToken cookie
    Cookies.remove('accessToken');

    // Redirect the user to the home page or wherever you want
    navigate('/');
  }

  return (
    <div>
      <nav
        style={{ backgroundColor: 'light' }}
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Hackathon
          </a>
          <div className="ml-auto">
            
              <button
                className="btn btn-danger"
                onClick={Logout}
                type="button"
                style={{ border: 'none' }}
              >
                Logout
              </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
