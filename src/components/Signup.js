import React, { useState } from 'react';

import axios from 'axios';

import'./Signup.css'

import { useNavigate } from 'react-router';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

 

const SignupForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    username: '',

    name: '',

    email: '',

    phoneNo: '',

    password: '',

    role: '',

    teamId: '',

    teamName: '',

  });

  const [isloading, setIsloading] = useState(false);

 

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

      method: 'post',

      url: 'https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/auth/signup',

      data: formData,

    }).then(

      function (response) {

        console.log('response from signup api', response.data.message);

        if (response.data.message === 'User registered successfully!') {

          navigate('/login');

        }

      },

      function (error) {

        console.log('error from signup api', error);

      }

    );

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

    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>

      <div className='mask gradient-custom-3'></div>

      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>

        <MDBCardBody className='px-5'>

          <h2 className="text-uppercase text-center mb-5">Create an account</h2>

          <form onSubmit={handleSubmit}>

            <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form0' type='text' name='username' value={formData.username} onChange={handleChange} required />

            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' name='name' value={formData.name} onChange={handleChange} required />

            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' name='email' value={formData.email} onChange={handleChange} required />

            <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form3' type='text' name='phoneNo' value={formData.phoneNo} onChange={handleChange} required />

            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' name='password' value={formData.password} onChange={handleChange} required />

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

              <MDBInput wrapperClass='mb-4' label='Team ID' size='lg' id='form7' type='text' name='teamId' value={formData.teamId} onChange={handleChange} required />

            )}

            {formData.role === 'team-leader' && (

              <MDBInput wrapperClass='mb-4' label='Team Name' size='lg' id='form8' type='text' name='teamName' value={formData.teamName} onChange={handleChange} required />

            )}

            <div className='d-flex flex-row justify-content-center mb-4'>

              {isloading == false && <MDBBtn type="submit" className='w-100 gradient-custom-4' size='lg'>Register</MDBBtn>}

              {isloading == true && <MDBBtn disabled type="button" className='w-100 gradient-custom-4'>

                Please Wait ...

              </MDBBtn>}

             

            </div>

          </form>

        </MDBCardBody>

      </MDBCard>

    </MDBContainer>

  );

};

 

export default SignupForm;