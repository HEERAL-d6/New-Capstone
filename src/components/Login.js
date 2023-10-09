import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

function Login() {
    var navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    axios({
                method:"post",
                url:"https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/auth/signin",
                data:formData
           }).then(function(response){
            //  setAccessTok(response.data.accessToken)  
              console.log('Login form submitted with data:', formData);
              console.log('response from api is',response.data);
                    const roles = response.data.roles;
                    // Check user roles and navigate accordingly
                    if (roles.includes('ROLE_PARTICIPANT')) {
                    navigate('/participant');
                    } else if (roles.includes('ROLE_PANELIST')) {
                    navigate('/panelist');
                    } else if (roles.includes('ROLE_JUDGE')) {
                    navigate('/judge');
                    } else if (roles.includes('ROLE_ADMIN')) {
                    navigate('/admin');
                     }      else {
                     console.log('response from api',response.data)
                    }
                    // Store accessToken in cookies
                    const accessToken = response.data.accessToken;
                    console.log(accessToken);
                    Cookies.set('accessToken', accessToken, { expires: 7 }); // Set expiration as needed
           },function(error){
            console.log("error from signin api" , error)
           })
    // Add your login logic here
    // console.log('Login form submitted with data:', formData);
    setFormData({
        username: '',
        password: '',
    })
  };

  return (
    <div className="container-fluid p-3 my-5" style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col-10 col-md-6">
          <img
            src="img5.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    username
                  </label>
                  <mat-Form-Field>
                  <input
                     
                      type="string"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Type your username" // Add placeholder attribute
                      required
                    />
                    </mat-Form-Field>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input 
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Type your Password"
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
