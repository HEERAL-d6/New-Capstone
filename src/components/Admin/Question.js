import React from 'react'
import Sidebar2 from './Sidebar2'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

function Question({number,setNumber}) {
  const navigate = useNavigate();
    function Logout() {

        // Clear the accessToken cookie

        Cookies.remove('accessToken');



        // Redirect the user to the home page or wherever you want

        navigate('/');
    }
  return (
    <>
      <Sidebar2 number={number} setNumber={setNumber}/>
      <button

                className=" col-auto btn btn-dark "

                onClick={Logout}

                type="button"

                style={{ fontSize: "1rem", height: "2rem", width: "7rem", padding: "0rem", position: 'absolute', top: '3vh', left: '80vw' }}

            >

                Logout

            </button>

      <div >
        <div style={{ fontSize: "0.9rem", height: "1.5rem", width: "600px", marginTop: "8rem", marginLeft: "8rem" }}>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "12rem" }} class="btn btn-dark btn-lg float-start">Add Question FOR PANELIST</button>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "4rem", marginLeft: "0.4rem" }} class="btn btn-dark btn-lg float-start">Edit</button>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "5rem" }} class="btn btn-dark btn-lg float-end">Submit</button>
        </div>

        <div style={{ height: "11rem", width: "600px", marginTop: "1rem", marginLeft: "8rem", borderRadius: "0.2" }} class="card">
          <div style={{ fontSize: "0.9rem" }} class="card-body">
            <label class="form-label">Enter your Question:</label>
            <textarea style={{ fontSize: "0.9rem" }} class="form-control" row="5"></textarea>

            <div class="input-group mb-3">
              <span class="input-group-text" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} id="basic-addon1">Weightage Marks</span>
              <input type="number" class="form-control" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
              <span style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="input-group-text">Maximum Marks</span>
              <input type="number" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="form-control" placeholder="0" aria-label="Server"></input>
            </div>

          </div>
        </div>

        <div style={{ fontSize: "0.9rem", height: "1.5rem", width: "600px", marginTop: "5rem", marginLeft: "8rem" }}>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "12rem" }} class="btn btn-dark btn-lg float-start">Add Question FOR JUDGE</button>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "4rem", marginLeft: "0.4rem" }} class="btn btn-dark btn-lg float-start ">Edit</button>
          <button type="button" style={{ fontSize: "0.7rem", height: "2rem", width: "5rem" }} class="btn btn-dark btn-lg float-end">Submit</button>
        </div>

        <div style={{ height: "11rem", width: "600px", marginTop: "1rem", marginLeft: "8rem", borderRadius: "0.2" }} class="card">
          <div style={{ fontSize: "0.9rem" }} class="card-body">
            <label class="form-label">Enter your Question:</label>
            <textarea style={{ fontSize: "0.9rem" }} class="form-control" row="5"></textarea>

            <div class="input-group mb-3">
              <span class="input-group-text" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} id="basic-addon1">Weightage Marks</span>
              <input type="number" class="form-control" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
              <span style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="input-group-text">Maximum Marks</span>
              <input type="number" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }} class="form-control" placeholder="0" aria-label="Server"></input>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Question