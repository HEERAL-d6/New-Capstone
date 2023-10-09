import 'bootstrap/dist/css/bootstrap.min.css';
import MainBody from './MainBody';
import Sidebar from './Sidebar';
function Carousel() {
  return (
    <div className="text-center bg-dark text-white">
      
      {/* <div className='img4'>
      <img
        src="img4.jpeg"
        className="img-fluid"
        alt="img4"
        style={{ width: '100%',height:'90vh', margin: '0', padding: '0' }}
      />
      </div> */}
      <div className='img2'>
      <img
        src="img2.jpg"
        className="img-fluid"
        alt="img2"
      />
      </div>
      {/* <div>
        <MainBody/>
      </div> */}
      <div>
        <Sidebar/>
      </div>
      
      <div className='head my-3 bg-dark text-white' style={{textAlign:'left',fontSize:'24px'}}>
        <p style={{ fontWeight: 'bold' }}>INCEDO</p>
      </div>
      <div className="Table my-2 bg-dark text-white"style={{background:"white",textColor:"black", height:"50vh"}}>
      <table>
      <thead>
        <tr>
          <th style={{ paddingRight:'135px', textAlign:'left'}}>Company</th>
          <th style={{ paddingRight:'135px',textAlign:'left'}}>Services</th>
          <th style={{ paddingRight:'135px',textAlign:'left'}}>Industries</th>
          <th style={{ paddingRight:'135px',textAlign:'left'}}>Platform</th>
          <th style={{ paddingRight:'135px',textAlign:'left'}}>Insights</th>
          <th style={{ paddingRight:'135px',textAlign:'left'}}>Careers</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ marginBottom: '20px'}}>
          <td style={{textAlign:'left'}}>Company Overview</td>
          <td style={{textAlign:'left'}}>AI and Data</td>
          <td style={{textAlign:'left'}}>Financial Services</td>
          <td style={{textAlign:'left'}}>Incedo LighthouseTM</td>
          <td style={{textAlign:'left'}}>Case Studies</td>
          <td style={{textAlign:'left'}}>Contact Us</td>
        </tr>
        <tr style={{ marginBottom: '20px'}}>
          <td style={{textAlign:'left'}}>Our Operating Principles</td>
          <td style={{textAlign:'left'}}>Cybersecurity</td>
          <td style={{textAlign:'left'}}>Life Sciences</td>
          <td style={{textAlign:'left'}}>IncedoPay</td>
          <td style={{textAlign:'left'}}>White Papers</td>
        </tr>
        <tr>
         <td style={{textAlign:'left'}}>Leadership</td>
          <td style={{textAlign:'left'}}>Digital Engineering</td>
          <td style={{textAlign:'left'}}>Product Engineering</td>
          <td style={{textAlign:'left'}}>Incedo Diagnostics</td>
          <td style={{textAlign:'left'}}>Blogs</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>Winning In The Digital Age</td>
          <td style={{textAlign:'left'}}>Experience Design</td>
          <td style={{textAlign:'left'}}>Telecom</td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>Videos</td>
        </tr> 
        <tr>
          <td style={{textAlign:'left'}}>News</td>
          <td style={{textAlign:'left'}}>Operations Transformation</td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>Webinars</td>
        </tr> 
        <tr>
          <td style={{textAlign:'left'}}>Events</td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>  </td>
          <td style={{textAlign:'left'}}>Leaders’ Conclave</td>
        </tr> 
        <tr>
          <td style={{textAlign:'left'}}>Awards and Recognitions</td>
        </tr> 
      </tbody>
    </table>
    </div>
    </div>

        

       
  );
}

export default Carousel;
