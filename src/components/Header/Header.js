import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to Tshirt Mania</h1>
            <nav className='display-flex'>
                <CustomLink className='nav-center' to='/home'>Home</CustomLink>
                <CustomLink className='nav-center' to='/orderreview'>Order Review</CustomLink>
                <CustomLink className='nav-center' to='/grandpa'>Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;