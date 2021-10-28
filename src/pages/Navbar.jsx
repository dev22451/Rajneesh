import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/message">Messages</NavLink></li>
        </ul>
    )
}
export default Navbar;