import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function
    Sidebar({ number, setNumber }) {



    return (

        <div><div
            className='sideBar'>

            <div
                class="d-flex flex-column flex-shrink-0 p-3 text-secondary bg-light text-start" style={{
                    width: "300px",
                    height: "100vh"
                }}>

                <div
                    class="sideBar-Heading d-flex flex-row">



                    <h5 class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">

                        Participant Dashboard

                    </h5>

                </div>

                <hr />

                <ul
                    class="nav nav-pills flex-column mb-auto">



                    <li
                        class="nav-item my-2">


                        {number == 1 ?
                            <a
                                // href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <HomeIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/participant'>Home</Link></strong>

                            </a> :
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <HomeIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(1)} style={{ textDecoration: "none", color: "black" }} to='/participant'> Home</Link></lead>

                            </a>}


                    </li>

                    <li
                        class="nav-item my-2">
                        {number == 2 ?
                            <a
                                // href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <ArticleOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/myapp'>My Application</Link></strong>

                            </a> :
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <ArticleOutlinedIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(2)} style={{ textDecoration: "none", color: "black" }} to='/myapp'> Myapplication</Link></lead>

                            </a>}





                    </li>

                    <li
                        class="my-2">
                        {number == 3 ?
                            <a
                                // href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <AccountCircleOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/myprofile'>Profile</Link></strong>

                            </a> :
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <AccountCircleOutlinedIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(3)} style={{ textDecoration: "none", color: "black" }} to='/myprofile'> Profile</Link></lead>

                            </a>}



                    </li>

                    <li
                        class="my-2">



                    </li>

                    <li
                        class="my-2">



                    </li>



                </ul>
                <div><p class="mx-5 text-dark fw-bold" >Submission Deadline</p>
                    <div class="d-flex flex-wrap">
                        <div class="mx-4 text-dark " style={{ width: "2rem", height: "2rem", backgroundColor: "white" }}> <h3 style={{ fontWeight: "bolder" }}>07</h3>  </div><p class="mt-2 text-dark"> Days</p>
                        <div class="mx-4 text-dark " style={{ width: "2rem", height: "2rem", backgroundColor: "white" }}> <h3 style={{ fontWeight: "bolder" }}>12</h3>  </div><p class="mt-2 text-dark"> Hours</p>
                    </div>
                </div>

                <hr />



            </div>

        </div></div>

    )

}



export
    default Sidebar
