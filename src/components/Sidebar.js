import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import ScrollToTopButton from './ScrollToTopButton'
import { Typography } from '@mui/material';

import "./sidebar.css"

function Sidebar() {

  return (
    <div className='d-flex bg-light '>
      <div className="p-2 style={{ flex : 1}}">
        <div className="row flex-nowrap bg-dark">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>

                  <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li className="w-100rem">
                      <a href="#overview" className="nav-link px-0"> <span className="d-none d-sm-inline text-white" justifyContent='center' alignItems='center'>Hackathon</span></a>
                    </li>
                    <li>

                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#rules' className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white"><b>Rules</b></span></a>
                </li>


                <li>
                  <a href="#incedo" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white" style={{ whiteSpace: 'nowrap' }}><b>About Incedo</b></span> </a>
                </li>
              </ul>
              <hr />

            </div>
          </div>
        </div>
      </div>
      <div className='p-21' style={{ flex: 2 }}>
        <div id="Hackathon" className="inner-panel text-dark" >

          <h2 className="regular dark weight-600 caps inline-block float-left fs-5 fw-semibold " id='overview' style={{ textAlign: 'justify' }}>

            Hackathon
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
          </h2>
          <div style={{ padding: "20px 0px 20px 0px", marginLeft:"1rem" }} class="text-start">
            <h4>This is the most exciting event everyone is waiting for, the Incedo own Hackathon - Incedo Hack-lite</h4>
          </div>

          <div style={{ textAlign: 'justify' }} class="text-start">
            <p>In this event you can present your ideas to bring innovation in your Domain.</p>
          </div>

          <p style={{ textAlign: 'justify' }}>The theme of this year hackathon is - <strong><p> Building Intelligent Products In Your Respective Domain</p> </strong>— that will helps our clients as well as the organisation itself for better future.&nbsp;</p>
        </div>

        <div id="rules" className="inner-panel text-dark" >

          <h2 className="regular dark weight-600 caps inline-block float-left fs-5 " style={{ textAlign: 'justify', padding: "20px 0px 0px 0px" }}>
            <b> RULES</b>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
          </h2>

          <Typography component="div" >
            <ul style={{ textAlign: 'justify' }}>
              <li>This is an online hackathon, and you can find the link on the Incdo Hub only.</li>
              <li>Registration is open for the teams of up to five (4) members.There is only one team leader and he will provide a team id to team member for the joining purpose.</li>
              <p><b>NOTE:Team member will only submit the idea and rest memeber can see that idea.</b></p>

            </ul>
          </Typography>

          <Typography component="div" >
            <ul style={{ textAlign: 'justify' }}>
              <li>There are various Domains, and team leader submittheir team idea under one most suited Domain only.</li>
              <li>Leader can edit his idea till deadline.</li>

              <li>Participants can take refrences from open-source projects.</li>
            </ul>
          </Typography>
        </div>

        <div id="incedo" className="inner-panel text-dark" >

          <h2 className="regular dark weight-600 caps inline-block float-left fs-5" style={{ textAlign: 'justify', padding: "30px 0px 0px 0px" }}>
            <b>ABOUT INCEDO</b>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
          </h2>
          <p class="text-start">Incedo is a technology consulting and services firm that specializes in data and analytics, digital transformation, and technology solutions. Incedo is known for providing services to various industries, including financial services, healthcare, life sciences, communication engineering, and technology.</p>
          <h5 style={{ textAlign: 'justify' }}><b>Here are some key points about Incedo:-</b></h5>
          <Typography component="div">
            <ul style={{ textAlign: 'justify' }}>
              <li><b>Services:</b> Incedo offers a range of services, including data engineering and analytics, digital product engineering, customer experience management, and emerging technology solutions. They work with clients to help them harness the power of data and technology to improve their business operations and make data-driven decisions.</li>
              <li><b>Industry Focus:</b> Incedo has a strong presence in industries such as financial services, where they help clients with data analytics, risk management, and digital transformation. They also serve clients in healthcare and life sciences, assisting with data management, research and development, and regulatory compliance.</li>
              <li><b>Technology Expertise:</b> Incedo has expertise in various technologies and tools used in data analytics and digital transformation, including big data, cloud computing, artificial intelligence, machine learning, and blockchain.</li>
              <li><b>Global Presence:</b> Incedo has a global presence, with offices and delivery centers in multiple locations worldwide. Their global reach allows them to serve clients across different regions effectively.</li>
              <li><b>Clientele:</b> Incedo has worked with a diverse range of clients, including Fortune 500 companies, startups, and mid-sized enterprises. They collaborate closely with their clients to develop customized solutions that address their specific business needs.</li>
              <li><b>Innovation:</b> The company focuses on innovation and staying at the forefront of technology trends. They often collaborate with clients to develop innovative solutions that can drive business growth and improve efficiency.</li>
            </ul>
          </Typography>
        </div>
      </div>
      <div className='p-2' style={{ flex: 0.7 }}>
        <ScrollToTopButton />
      </div>

    </div>
  )
}

export default Sidebar
