import
React from
    'react'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function
    Sidebar4( {number, setNumber}) {
    


    return (

        <div><div
            className='sideBar'>

            <div
                class="d-flex flex-column flex-shrink-0 p-3 text-secondary bg-light" style={{
                    width: "300px",
                    height: "100vh"
                }}>

                <div
                    class="sideBar-Heading d-flex flex-row">



                    <h5 class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">

                        Judge Dashboard

                    </h5>

                </div>

                <hr />

                <ul
                    class="nav nav-pills flex-column mb-auto">



                    <li
                        class="nav-item my-2">


                        {number == 1 ?
                            <a
                                href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <AdminPanelSettingsOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project 1</Link></strong>

                            </a> :
                            <a
                                href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <AdminPanelSettingsOutlinedIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(1)} style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project1</Link></lead>

                            </a>}


                    </li>

                    <li
                        class="nav-item my-2">
                        {number == 2 ?
                            <a
                                href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <EditCalendarOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project 2</Link></strong>

                            </a> :
                            <a
                                href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <EditCalendarOutlinedIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(2)} style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project 2</Link></lead>

                            </a>}

                       



                    </li>

                    <li
                        class="my-2">
                        {number == 3 ?
                            <a
                                href="#"
                                class="nav-link text-body"
                                aria-current="page">

                                <QuizOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project 3</Link></strong>

                            </a> :
                            <a
                                href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <QuizOutlinedIcon /> <lead class="pt-5 px-2"><Link   onClick={() => setNumber(3)} style={{ textDecoration: "none", color: "black" }} to='/judgedash'>Project 3</Link></lead>

                            </a>}

                       
                    </li>

                    <li
                        class="my-2">



                    </li>

                    <li
                        class="my-2">



                    </li>



                </ul>
               






                <hr />



            </div>

        </div>







        </div>

    )

}



export
    default Sidebar4
