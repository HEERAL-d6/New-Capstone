import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = () => {
  var navigate = useNavigate()
  const [formData, setFormData] = useState({
    username:'',
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    role: '',
    teamId: '',
    teamName:'',
  });
//   const axios = require('axios');
     var [response,setResponse]=useState()
     var [isloading,setIsloading] = useState(false)

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
    // Add your form submission logic here
    axios({
                method:"post",
                url:"https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/auth/signup",
                data:formData
            }).then(function(response){
                console.log("response from sigup api" , response.data.message)
                if(response.data.message=="User registered successfully!"){
                    navigate('/login')
                }
                // else
                //     setResponse(response.data.message);
        
                // }
            }, function(error){
              
                console.log("error from signup api" , error)
            })
    setFormData({
      username: '',  
      name: '',
      email: '',
      phoneNo: '',
      password: '',
      role: '',
      teamId: '',
      teamName: '',
    });
  };
 

  return (
    <section className="vh-120" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phoneNo"
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          required
                        />
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
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                          Role
                        </label>
                        <select
                          className="form-select"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select a role
                          </option>
                          <option value="team-leader">Team Leader</option>
                          <option value="team-member">Team Member</option>
                          <option value="panelist">Panelist</option>
                          <option value="judge">Judge</option>
                        </select>
                      </div>
                      {formData.role === 'team-member' && (
                        <div className="mb-3">
                          <label htmlFor="teamId" className="form-label">
                            Team ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="teamId"
                            name="teamId"
                            value={formData.teamId}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      )}

                      {formData.role === 'team-leader' && (
                        <div className="mb-3">
                          <label htmlFor="teamName" className="form-label">
                            Team Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      )}
                      
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      {/* {isloading == false && <button onClick={signup} type="button" className="btn btn-primary">
                                Register
                            </button> }
                            {isloading==true && <button disabled type="button" className="btn btn-primary">
                                Please Wait ...
                      </button>} */}
                          {isloading == false && <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>}
                        {isloading==true && <button disabled type="button" className="btn btn-primary">
                                Please Wait ...
                            </button>} 
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
