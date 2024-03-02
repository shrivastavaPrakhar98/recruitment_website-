import React from 'react'
import Navbar from './Navbar';
import '../Style/Services.css';
import Slogo from '../Images/Setout-logo3.png';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <div className='main-service-box'>
        <div className="nav-box">
          <Navbar />
        </div>
        <div className="service-quote">
          <p className='service-heading' >
            Empowering Careers, Building Futures
          </p>
          <p className='service-heading1'>
            Your Journey, Our Priority
          </p>
        </div>
        <div className="services-roadmap">
          <div className="service-heading-box">
            <p className='service-head1' >Our Recruitment Process </p>
          </div>

          <div className="service-road">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-content">
                  <div class="timeline-date">Candidate Identification</div>
                  <div class="timeline-description">We identify potential candidates through our extensive network and rigorous screening processes.</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-content">
                  <div class="timeline-date">Client Requirement Analysis</div>
                  <div class="timeline-description">We deeply understand the requirements of our clients to ensure the perfect match for their needs.</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-content">
                  <div class="timeline-date">Interview & Selection</div>
                  <div class="timeline-description">Our thorough interviewing process leads to the selection of the most suitable candidates for the positions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="web-footer">
          <div className="right-footer">
            <img src={Slogo} alt="no-img" className='slogos' />
          </div>
          <div className="left-footer">
            <div className="short-links">
              <li className='nav_item' ><Link to='/'>Home</Link></li>
              <li className='nav_item'><Link to='/services' >Services</Link></li>
              <li className='nav_item' ><Link to='/blog' >Blog</Link></li>
            </div>
            <div className="rec-icons">

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Services;