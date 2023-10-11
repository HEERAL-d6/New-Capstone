import React from 'react'
import Sidebar2 from './Sidebar2'
import Accordion from 'react-bootstrap/Accordion';

function Editpan({ number, setNumber }) {
    return (
        <>
            <Sidebar2 number={number} setNumber={setNumber} />
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>




                {/* <div class="accordion" style={{ float: "right", marginTop: "4rem", marginLeft:"6rem" }} id="accordionPanelsStayOpenExample">
                <div style={{ fontSize: "0.8rem" }} class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={{backgroundColor:"#F8F9FA"}} class="accordion-button fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Panelist1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <lead   class="fw-semibold">NAME OF PANELIST</lead>
                            <p class="fw-semibold">Ideas assigned to panelist:</p>
                            <li  style={{ fontSize: "0.9rem",height:"1.5rem", width: "700px" }}><span class="fw-semibold">Idea1:</span> This is the first idea This is the first idea This is the first idea This is the first idea this idea idea</li>
                            <li  style={{ fontSize: "0.9rem",height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea2:</span> This is the second idea</li>
                            <li  style={{ fontSize: "0.9rem", height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea3:</span> This is the third idea</li>
                            <li style={{ fontSize: "0.9rem",height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea4:</span> This is the fourth idea</li>
                        </div>
                    </div>
                </div>






                <div style={{ fontSize: "0.8rem" }} class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={{backgroundColor:"#F8F9FA"}} class="accordion-button fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Panelist2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show " aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <lead   class="fw-semibold">NAME OF PANELIST</lead>
                            <p class="fw-semibold">Ideas assigned to panelist:</p>
                            <li  style={{ fontSize: "0.9rem",height:"1.5rem", width: "700px" }}><span class="fw-semibold">Idea1:</span> This is the first idea This is the first idea This is the first idea This is the first idea this idea idea</li>
                            <li  style={{ fontSize: "0.9rem",height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea2:</span> This is the second idea</li>
                            <li  style={{ fontSize: "0.9rem", height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea3:</span> This is the third idea</li>
                            <li style={{ fontSize: "0.9rem",height:"1.5rem", width: "15rem" }}><span class="fw-semibold">Idea4:</span> This is the fourth idea</li>
                        </div>
                    </div>
                </div> */}


                {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed fw-bold" style={{backgroundColor:"#F8F9FA"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Panelist3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse  " aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div> */}





                {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed fw-bold" style={{backgroundColor:"#F8F9FA"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Panelist4
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div> */}
            </div>







        </>
    )
}

export default Editpan