import React from 'react'
import Sidebar4 from './sidebar4'
import Cookies from "js-cookie";
import { useState,useEffect } from 'react';

const url = "https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/questions/forJudge";

function Judgedash( {number,setNumber}) {

    const [Jquestion, setJquestion] = useState([]);

    useEffect(() => {

    const fetchData = async () => {

      try {

        const accessToken = Cookies.get('accessToken')

        const response = await fetch(url, {

          method: "GET",

          headers: {

            Authorization: `Bearer ${accessToken}`, // Include the access token in the headers

          },

        });

 

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

 

        const data = await response.json();

 

        console.log(data);

 

        setJquestion(data); // You can set the data in your state if needed

      } catch (error) {

        console.error("Error fetching data:", error);

      }

    };

 

    fetchData();

  }, []);


  return (
    <>
    <Sidebar4 number={number} setNumber={setNumber} />

<div style={{ fontSize: "0.9rem", marginTop: "1rem" }}

        className="card-body">



                <h6>Project Title:</h6>



                <label

                style={{ marginTop: "0.5rem" }}

                className="form-label fw-semibold"

                >

                Git Link:

                </label>

                <textarea

                style={{ fontSize: "0.9rem", width:"50vh"}}

                className="form-control text-light mx-auto my-auto d-flex"

               

                row="5"

                >

                click on file to open

                </textarea>

        </div>

{Jquestion.map((element,index)=>{

    const {question,maxMarks,id} = element;

    return (

       

        <div style={{ display: "flex" }} key={id}>

    <div

      style={{

        height: "28rem",

        width: "600px",

        marginTop: "5rem",

        marginLeft: "10rem",

        borderRadius: "0.2",

      }}

      className="card"

    >

      <div

        style={{ fontSize: "0.9rem", marginTop: "1rem" }}

        className="card-body"

      >

      <div

          style={{

            backgroundColor: "#d3d3d3",

            marginTop: "2 rem",

            height: "13rem",

          }}

          className="card-body"

        >

          <label

            style={{ marginTop: "0rem" }}

            className="form-label fw-semibold"

          >

            Question id {index + 1}:

          </label>

          <textarea

            style={{ fontSize: "0.9rem" }}

            className="form-control"

            row="3"

            value={question}

          ></textarea>



          <div className="input-group mb-3">

            <span

              className="input-group-text"

              style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}

              id="basic-addon1"

            >

              Weightage Marks

            </span>

            <input

              type="number"

              className="form-control"

              style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}

              placeholder="0"

              aria-label="Username"

              aria-describedby="basic-addon1"

            />

            <span

              style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}

              className="input-group-text"

            >

              Maximum Marks

            </span>

            <input

              type="number"

              value={maxMarks}

              style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}

              className="form-control"

              placeholder="0"

              aria-label="Server"

            ></input>

          </div>



          <div

            className="col-auto"

            style={{

              float: "right",

              marginTop: "0.2rem",

              marginRight: "0.19rem",

            }}

          >

            <button

              type="submit"

              style={{ fontSize: "0.7rem", height: "2rem", width: "4rem" }}

              className="btn btn-dark btn-sm"

            >

              Next

            </button>

            <button

              type="submit"

              style={{

                fontSize: "0.7rem",

                height: "2rem",

                width: "4rem",

                marginLeft: "0.4rem",

              }}

              className="btn btn-dark btn-sm"

            >

              Submit

            </button>

           

          </div>

        </div>

      </div>

    </div>

  </div>

    )

})}
    </>
  )
}

export default Judgedash