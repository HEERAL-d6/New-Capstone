import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Login.css';

import 'bootstrap/dist/css/bootstrap.min.css';

 

import Navbar from './Navbar';

import axios from 'axios';

import { useNavigate } from 'react-router';

import Cookies from 'js-cookie';

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

import { Button } from 'bootstrap';

 

function Login() {

    var navigate = useNavigate()

    var [error, setError] = useState(false)

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

            method: "post",

            url: "https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/auth/signin",

            data: formData

        }).then(function (response) {

            console.log('Login form submitted with data:', formData);

            console.log('response from api is', response.data);

            const roles = response.data.roles;

            // Check user roles and navigate accordingly

            if (roles.includes('ROLE_PARTICIPANT')) {

                navigate('/participant');

            } else if (roles.includes('ROLE_PANELIST')) {

                navigate('/pandash');

            } else if (roles.includes('ROLE_JUDGE')) {

                navigate('/judgedash');

            } else if (roles.includes('ROLE_ADMIN')) {

                navigate('/editpan');

            } else {

                setError("Invalid Login")

            }

            // Store accessToken in cookies

            const accessToken = response.data.accessToken;

            Cookies.set('accessToken', accessToken, { expires: 7 }); // Set expiration as needed

        }, function (error) {

            console.log("error from signin api", error)

        })

 

        setFormData({

            username: '',

            password: '',

        })

    };

 

    return (

        <>

            <MDBContainer className='loginn' fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>

                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>

                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

 

                                <MDBInput

                                    wrapperClass='mb-4 mx-5 w-100'

                                    labelClass='text-white'

                                    label='Username'

                                    id='username'

                                    type='text'

                                    size="lg"

                                    name="username"

                                    value={formData.username}

                                    onChange={handleChange}

                                    placeholder="Type your username"

                                    required

                                />

 

                                <MDBInput

                                    wrapperClass='mb-4 mx-5 w-100'

                                    labelClass='text-white'

                                    label='Password'

                                    id='password'

                                    type='password'

                                    size="lg"

                                    name="password"

                                    value={formData.password}

                                    onChange={handleChange}

                                    placeholder="Type your Password"

                                    required

                                />

 

                                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

 

                                <button

                                          className='btn btn-outline-light mx-2 px-5'

                                          onClick={handleSubmit}

                                        >

                                          Login

                                </button>

 

                                <div className='d-flex flex-row mt-3 mb-5'>

                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>

                                        <MDBIcon fab icon='facebook-f' size="lg" />

                                    </MDBBtn>

 

                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>

                                        <MDBIcon fab icon='twitter' size="lg" />

                                    </MDBBtn>

 

                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>

                                        <MDBIcon fab icon='google' size="lg" />

                                    </MDBBtn>

                                </div>

 

                                <div>

                                <Link to="/Signup"> <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p></Link>

                                </div>

                            </MDBCardBody>

                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </>

    );

 

}

 

export default Login;