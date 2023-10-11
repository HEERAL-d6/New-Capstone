import
React from
    'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

import { Link } from 'react-router-dom';
import { useState } from 'react';
function
    Sidebar3( {number, setNumber}) {
    


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

                        Panelist Dashboard

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

                                <LightbulbOutlinedIcon /> <strong class="pt-5 px-2"><Link style={{ textDecoration: "none", color: "black" }} to='/pandash'>Idea 1</Link></strong>

                            </a> :
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <LightbulbOutlinedIcon /> <lead class="pt-5 px-2"><Link onClick={() => setNumber(1)} style={{ textDecoration: "none", color: "black" }} to='/pandash'> Idea 1</Link></lead>

                            </a>}


                    </li>

                    <li
                        class="nav-item my-2">
                        
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <LightbulbOutlinedIcon /> <lead class="pt-5 px-2"> Idea 2</lead>

                            </a>

                       



                    </li>

                    <li
                        class="my-2">
                       
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <LightbulbOutlinedIcon /> <lead class="pt-5 px-2">Idea 3</lead>

                            </a>

                       
                    </li>


                    <li
                        class="my-2">
                       
                            <a
                                // href="#"
                                class="nav-link text-secondary"
                                aria-current="page"
                            >
                                <LightbulbOutlinedIcon /> <lead class="pt-5 px-2">Idea 4</lead>

                            </a>

                       
                    </li>

                   



                </ul>
               






                <hr />



            </div>

        </div>







        </div>

    )

}



export
    default Sidebar3
