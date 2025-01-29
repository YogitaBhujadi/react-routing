import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/About">About</Link>
            <Link className="nav-item" to="/Contact">Contact</Link>
            <Link className="nav-item" to="/Dashboard">Dashboard</Link>
        </div>
    )
}

export default Navbar