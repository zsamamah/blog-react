import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../white-logo.webp'

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div><Link to="/"><img src={logo} alt="zaid"/></Link></div>
                <div className="mainMenu">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/dashboard">Dashboard</Link></div>
                </div>
                <div className="mainMenu2">
                <div><Link to="/register">Register</Link></div>
                <div><Link to="/login">Login</Link></div>
                </div>
            </div>
        )
    }
}

export default Nav
