import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Main.css';
import Navbar from './Navbar';
import office from '../Images/office_bg2.jpg';
import Efficent from '../Images/efficiency.png';
import Interview from '../Images/interview.png';
import Technical from '../Images/technicalSkill.png';
import Slogo from '../Images/Setout-logo3.png';


const Main = () => {
    return (
        <>
            <div className="main_content">
                <div className="nav-space">
                    <Navbar />
                </div>
                <div className="background-offc">
                    <div className="direc-box">
                        <p className='web-heading'>we pursue the dreams</p>
                        <div className="getStarted">Get Started</div>
                    </div>
                </div>
                <div className="intro-box">
                    <div className="left-content">
                    </div>
                    <div className="right-content">
                        <div className="inner-right-content">
                            <p className='web-heading1' >
                                Setout Infotech
                            </p>
                            <p className='setout-content'>
                                Setout Infotech is a leading tech recruitment agency in India, specializing in
                                matching top talent with technology companies. With a proven track record of
                                successfully placing over 100 candidates across various companies, we are
                                committed to providing exceptional recruitment services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-expertise">
                    <div className="expertise-heading">
                        <p className='expertise-spell' >
                            Our Solutions
                        </p>
                    </div>
                    <div className="expertise-content">
                        <div className="expertise-cate1">
                            <img src={Efficent} alt="no img" className='efficent-design' />
                            <p className='efficent-heading'>Efficient Process</p>
                            <p className="efficent-content">
                                We have a well-defined and
                                efficient recruitment process that
                                ensures the rightfitfor both
                                candidates and employers.

                            </p>
                        </div>
                        <div className="expertise-cate1">
                            <img src={Technical} alt="no img" className='efficent-design' />
                            <p className='efficent-heading'>Technical Competency</p>
                            <p className="efficent-content">
                                Our team specializes in assessing
                                technical skills, ensuring the best
                                match for company requirements.


                            </p>
                        </div>
                        <div className="expertise-cate1">
                            <img src={Interview} alt="no img" className='efficent-design' />
                            <p className='efficent-heading'>Interview Preparation</p>
                            <p className="efficent-content">
                                We provide thorough interview
                                preparation to our candidates,
                                ensuring successful placements.

                            </p>
                        </div>
                    </div>

                </div>
                <div className="client-testimonial">
                    <p className='client-heading'>what our client  says</p>
                    <div className="testimonial-container">
                        <div className="testimonial1">
                            <p className='testimonial-content'>
                                "We are extremely satisfied
                                with the quality of
                                candidates provided by
                                SetoutInfotech. They truly
                                understand our needs and
                                provide exceptional
                                service."
                            </p>
                        </div>

                        <div className="testimonial1">
                            <p className='testimonial-content'>
                                "SetoutInfotech has been
                                our reliable partner in
                                recruiting top tech talent.
                                Their professionalism and
                                dedication are
                                commendable."

                            </p>
                        </div>

                        <div className="testimonial1">
                            <p className='testimonial-content'>
                                "The candidates sourced
                                through SetoutInfotech
                                have been outstanding, and
                                their team offers
                                exceptional support
                                throughoutthe
                                recruitment process."
                            </p>
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

export default Main;