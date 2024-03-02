import React from 'react';
import '../Style/Navbar.css';
import Setout_logo from '../Images/Setout-logo3.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="main_nav">
                <div className="logo">
                    <img src={Setout_logo} alt="no img" className='logo_img' />
                </div>
                <div className="middle">
                    <ul className='nav_list' >
                        <li className='nav_item' ><Link to='/'>Home</Link></li>
                        <li className='nav_item'><Link to='/services' >Services</Link></li>
                        <li className='nav_item' ><Link to='/blog' >Blog</Link></li>
                    </ul>
                </div>
                <div className='apply_button' >
                    <div className="apply_btn">
                        <p className='text_btn' >Submit Your CV</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar