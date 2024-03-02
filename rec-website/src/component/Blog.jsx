import React from 'react';
import '../Style/Blog.css';
import Navbar from './Navbar';
import Post1 from '../Images/blog-post.jpg';
import Post2 from '../Images/post2-img.jpg';
import Slogo from '../Images/Setout-logo3.png';
import { Link } from 'react-router-dom';


function Blog() {
    return (
        <>
            <div className="main-blog-box">
                <div className="navbox">
                    <Navbar />
                </div>
                <div className="post-heading">
                    <p className='post-heading-name' >Setout Infotech Recruiting Blogs</p>
                </div>
                <div className="post-content">
                    <div className="blog1">
                        <div className="left-side-post">
                            <img src={Post1} alt=" no img" className='post1-img' />
                        </div>
                        <div className="right-side-post">
                            <p className='post1-heading' >Navigating the Tech Talent Waters</p>
                            <p className='post1-content' >
                                In the dynamic realm of technology, finding the right talent can feel like embarking on an adventurous journey.
                                At Setout Infotech, we specialize in navigating the vast landscape of tech recruitment, connecting businesses with top-tier professionals. In this blog, we delve into the intricacies of software development roles, software testing positions, and the ever-evolving domain of game design and development. Join us as we explore the keys to unlocking your company's technological potential.
                            </p>
                        </div>
                    </div>
                    <div className="blog2">
                        <div className="left-side-post">
                            <img src={Post2} alt=" no img" className='post1-img' />
                        </div>
                        <div className="right-side-post">
                            <p className='post1-heading' >Crafting the Future of Tech Teams</p>
                            <p className='post1-content' >
                                As technology continues to redefine industries, having the right team in place becomes paramount.
                                At Setout Infotech, we understand the pivotal role played by software developers, testers, and game designers in shaping the future.
                                In this blog, we unravel the dynamics of talent acquisition in the tech realm, shedding light on strategies that go beyond conventional recruitment.
                                Join us in exploring how Setout Infotech is at the forefront of sculpting innovative tech teams that drive success in a rapidly changing digital landscape.
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

export default Blog;