import React from 'react'
import Sidebar from './Sidebar'

function Profile({number,setNumber}) {
    return (
        <>
<Sidebar number={number} setNumber={setNumber}/>
            <div style={{ width: "80%" }}>
                <div style={{ position: 'absolute', top: "15vh", left: "38vw", width: "48.7%",  }}>
                    <div class='mb-4'>
                        <h5 class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">

                            MEET OUR TEAM
                        </h5>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div style={{ fontSize: "0.7rem", height: "10rem", width: "18rem"}} class="col">
                            <div style={{ borderRadius: "0.4rem 0.4rem 0rem 0rem" }} class="card h-100">
                                
                                <div class="card-body">
                                    <h6 class="card-title">NAME<span style={{marginLeft:"0.6rem"}} class="badge bg-secondary">Team Leader</span></h6>
                                    <li class="card-text">Software Developer</li>
                                    <li class="card-text">Skills</li>
                                    <li class="card-text">Mobile Number</li>
                                    <li class="card-text">Email@gmail.com</li>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>

                                </div>
                            </div>
                        </div>


                        <div style={{ fontSize: "0.7rem", height: "10rem", width: "18rem" }} class="col">
                            <div style={{ borderRadius: "0.4rem 0.4rem 0rem 0rem" }} class="card h-100">
                                
                                <div class="card-body">
                                    <h6 class="card-title">NAME</h6>
                                    <li class="card-text">Software Developer</li>
                                    <li class="card-text">Skills</li>
                                    <li class="card-text">Mobile Number</li>
                                    <li class="card-text">Email@gmail.com</li>

                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>

                                </div>
                            </div>
                        </div>



                    </div>

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div style={{ fontSize: "0.7rem", height: "10rem", width: "18rem" }} class="col">
                            <div style={{ borderRadius: "0rem 0rem 0.4rem 0.4rem" }} class="card h-100">
                                
                                <div class="card-body">
                                    <h6 class="card-title">NAME</h6>
                                    <li class="card-text">Software Developer</li>
                                    <li class="card-text">Skills</li>
                                    <li class="card-text">Mobile Number</li>
                                    <li class="card-text">Email@gmail.com</li>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>

                                </div>
                            </div>
                        </div>


                        <div style={{ fontSize: "0.7rem", height: "10rem", width: "18rem" }} class="col">
                            <div style={{ borderRadius: "0rem 0rem 0.4rem 0.4rem" }} class="card h-100">
                                
                                <div class="card-body">
                                    <h6 class="card-title">NAME</h6>
                                    <li class="card-text">Software Developer</li>
                                    <li class="card-text">Skills</li>
                                    <li class="card-text">Mobile Number</li>
                                    <li class="card-text">Email@gmail.com</li>

                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    

                                </div>
                            </div>
                        </div>



                    </div>













                    {/* <div style={{ fontSize: "0.7rem", height: "20rem", width: "35rem" }} class="card text-center">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="true" href="#">Participant1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Participant2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Participant3</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Participant4</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card-body">
                           
                            <figure class="text-start">
                                <blockquote class="blockquote">
                                    <p>FULL NAME</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Software Developer <cite title="Source Title"></cite>
                                </figcaption>
                            </figure>
                            <div class="card-body text-start">
                               
                                <li class="card-text">Software Developer</li>
                                <li class="card-text">Skills</li>
                                <li class="card-text">Mobile Number</li>
                                <li class="card-text">Email@gmail.com</li>

                                

                            </div>
                            
                        </div>
                    </div> */}










                </div>
            </div>

        </>
    )
}

export default Profile