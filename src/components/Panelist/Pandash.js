import React from 'react'
import Sidebar3 from './Sidebar3'
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router';

function Pandash({ number, setNumber }) {
    const navigate = useNavigate();
    function Logout() {

        // Clear the accessToken cookie

        Cookies.remove('accessToken');



        // Redirect the user to the home page or wherever you want

        navigate('/');
    }
    return (
        <>
            <Sidebar3 number={number} setNumber={setNumber} />

            <button

                className=" col-auto btn btn-dark "

                onClick={Logout}

                type="button"

                style={{ fontSize: "1rem", height: "2rem", width: "7rem", padding: "0rem", position: 'absolute', top: '3vh', left: '80vw' }}

            >

                Logout

            </button>


            <div>
                <div style={{ height: "28rem", width: "600px", marginTop: "5rem", marginLeft: "10rem", borderRadius: "0.2" }} class="card text-start">
                    <div style={{ fontSize: "0.9rem", marginTop: "1rem" }} class="card-body ">
                        <h6  > Idea Title:</h6>

                        <label style={{ marginTop: "2rem" }} class="form-label fw-semibold " >Description:</label>
                        <textarea style={{ fontSize: "0.9rem" }} class="form-control " row="3"></textarea>


                        <div style={{ backgroundColor: "#d3d3d3", marginTop: "2.4rem", height: "13rem" }} class="card-body">
                            <label style={{ marginTop: "0rem" }} class="form-label fw-semibold">Question id 1:</label>
                            <textarea style={{ fontSize: "0.9rem" }} class="form-control" row="3"></textarea>

                            <div class="input-group mb-3">
                                <span class="input-group-text" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} id="basic-addon1">Weightage Marks</span>
                                <input type="number" class="form-control" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
                                <span style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="input-group-text">Maximum Marks</span>
                                <input type="number" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="form-control" placeholder="0" aria-label="Server"></input>
                            </div>

                            <div class="col-auto" style={{ float: "right", marginTop: "0.2rem", marginRight: "0.19rem" }}>
                                <button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "4rem" }} class="btn btn-dark btn-sm">Next</button>
                                <button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "4rem", marginLeft: "0.4rem" }} class="btn btn-dark btn-sm">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pandash