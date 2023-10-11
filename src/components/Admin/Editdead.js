import React from 'react'
import Sidebar2 from './Sidebar2'

function Editdead({number,setNumber}) {
    return (
        <>
            <Sidebar2 number={number} setNumber={setNumber} />
            <div style={{ width: "60%" }}>
                <div style={{ position: 'absolute', top: "12vh", left: "40vw", width: "48.7%" }}>
                    <div class='mb-4'>
                        <h4 class="d-flex align-items-center mx-auto mb-3 mb-md-0 me-md-auto text-dark
 text-decoration-none">

                            Enter Deadlines
                        </h4>

                    </div>
                </div>
                <div style={{ marginTop: "10rem", marginLeft: "12rem" }}>
                    <div>
                        <table class="table ">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">END DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><span class="fw-semibold" >Idea Submission</span></th>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span class="fw-semibold" >Idea Approval</span></th>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span class="fw-semibold" >Idea Implementation</span></th>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                    <td> <input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span class="fw-semibold" >Winner Announcement</span></th>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                    <td><input style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }} type='date'></input></td>
                                </tr>
                            </tbody>
                        </table>
                        <div><button type="submit" style={{ fontSize: "0.7rem", height: "2rem", width: "7rem", marginTop: "2rem" }} class="float-end btn btn-dark btn-sm">Save Changes</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editdead