import React from 'react'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Sidebar from './Sidebar';

function Myapplication({number,setNumber}) {
    return (
        <>
            <Sidebar number={number} setNumber={setNumber}/>
            <div style={{ width: "80%" }}>
                <div style={{ position: 'absolute', top: "10vh", left: "38vw", width: "48.7%" }}>
                    {/* <div class='mb-4'>
                        <h5 class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">

                            Review your idea
                        </h5>
                        
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between" }} class='mb-4 d-flex'>
                        <h5 class="d-flex align-items-center  text-dark
 text-decoration-none">

                            Review your idea
                        </h5><h6 class="d-flex align-items-center text-dark
 text-decoration-none">Team id</h6>
                    </div>






                    {/* <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Your Idea</label>
                        <div class="row g-3">
                            <div class="col-sm-30">
                                <div class="form-floating"> */}

                    <div style={{ borderRadius: "0.4rem 0.4rem 0rem 0rem", borderTop: "0.01rem solid var(--bs-border-color-translucent)" }} class="bg-dark clearfix  " >
                        <button type="button" style={{ borderRadius: "0.4rem 0rem 0.4rem 0rem" }} class="btn btn-dark float-start">Idea Title</button>
                        <button type="button" style={{ borderRadius: "0.4rem 0rem 0.4rem 0rem" }} class="btn btn-dark float-start">Idea Status</button>
                        <button type="button" style={{ borderRadius: "0rem 0.4rem 0rem 0.4rem" }} class="btn btn-dark float-end">Hackathon Status</button>
                    </div>





                    <div class="card text-center" style={{ borderRadius: "0rem 0rem 0.4rem 0.4rem" }}>
                        <div class="card-header" >
                            <ul class="nav nav-pills card-header-pills">
                                <li style={{ width: "599px" }} class="nav-item">
                                    {/* <a class="nav-link active" href="#">Preview</a> */}

                                    <button type="button" class="btn float-start">Preview</button>

                                    <button type="button" class="btn float-start">Edit</button>
                                    <button type="button" class="btn float-start">Copy</button>
                                    {/* <button type="button" style={{float:"right"}} class="btn float-end"><ContentCopyOutlinedIcon/></button> */}
                                    {/* <div style={{float:"right"}}><ContentCopyOutlinedIcon/></div> */}
                                </li>

                            </ul>
                        </div>
                        <div class="card-body" style={{ fontSize: "0.8rem", height: "200px", width: "600px" }} >
                            {/* <h5 class="card-title">Special title treatment</h5> */}
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            <textarea style={{ fontSize: "0.8rem", height: "130px", width: "565px", padding: "0.5rem" }} class="form-control" placeholder="Edit your idea" id="floatingTextarea"></textarea>
                            {/* <a href="#" style={{ fontSize: "0.7rem", height: "2rem", width: "7rem" }} class="btn btn-dark float-end">Save your idea</a> */}
                            <div class="col-auto" style={{ float: "right", marginTop: "0.69rem", marginRight: "0.19rem" }}>
                                <button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "7rem" }} class="btn btn-dark btn-sm">Save your idea</button>
                            </div>

                        </div>
                    </div>

                    <div class="mb-3">
                       <h5> <label for="formFile" style={{marginTop:"3rem"}}  class="form-label fw-semibold">Submit your project file </label></h5>
                       
                        <input style={{ fontSize: "0.9rem", height: "2.2rem", width: "600px" }} class="form-control" type="file" id="formFile" />
                    </div>


                    {/* <textarea style={{ fontSize: "0.8rem", height: "80px", width: "600px", padding: "0.5rem" }} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea> */}
                    {/* <label for="floatingTextarea"></label> */}
                    {/* </div>
                                {/* <input type="textarea" style={{fontSize: "0.7rem", height:"80px", width:"616px"}}  class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" /> */}
                    {/* </div>
                        </div>
                    </div> */}




                    {/* <div class="col-auto" style={{ float: "right", marginTop: "2.4rem" }}>
                        <button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "7rem" }} class="btn btn-dark btn-sm">Save your idea</button>
                    </div> */}




                </div>
            </div>
        </>
    )
}

export default Myapplication