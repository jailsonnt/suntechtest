import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../suntechLogo.png';

function Header() {
    return (
        <header style={headerStyle}>
            <img width="300" height="100" src={logo} alt="logo" />
            <br/>
            <Link to="/" style={linkStyle}>Users</Link> | <Link to="/about" style={linkStyle}>About</Link> 
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header