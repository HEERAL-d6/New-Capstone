import { FormLabel } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

function Pdash({ number, setNumber }) {
    return (
        <>
            <Sidebar number={number} setNumber={setNumber} />
            <div style={{ width: "80%" }}>
                <div style={{ position: 'absolute', top: "15vh", left: "38vw", width: "48.7%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }} class='mb-0.6 d-flex'>
                        <h5 class="d-flex align-items-center  text-dark
 text-decoration-none">

                            Send an idea
                        </h5><h5 class="d-flex align-items-center text-dark
 text-decoration-none">Hackathon Status</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }} class='mb-4 d-flex'>
                        <h6 class="d-flex align-items-center text-dark
 text-decoration-none">Team id</h6>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Idea Title</label>
                        <div class="row g-3">
                            <div class="col-sm-30">
                                <input type="text" style={{ fontSize: "0.8rem", height: "37.33px", width: "600px" }} class="form-control" id="formGroupExampleInput" placeholder="Write title here" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Description</label>
                        <div class="row g-3">
                            <div class="col-sm-30">
                                <div class="form-floating">
                                    <textarea style={{ fontSize: "0.8rem", height: "80px", width: "600px", padding: "0.5rem" }} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="col-md-4,d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">
                        <label for="inputState" class="form-label">Pre-defined domains</label>
                        <select id="inputState" style={{ fontSize: "0.8rem", height: "37.33px", width: "600px" }} class="form-select">

                            <option selected class="text-secondary" >Choose</option>
                            <option class="text-secondary">...</option>
                        </select>
                    </div>

                    <div class="col-auto" style={{ float: "right", marginTop: "2.4rem" }}>
                        <button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "7rem" }} class="btn btn-dark btn-sm">Send your idea</button>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Pdash