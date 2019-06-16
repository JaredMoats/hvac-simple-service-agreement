import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
                <Link to="/dashboard" className="navbar-item">Dashboard</Link>
                <Link to="/dashboard" className="navbar-item">New Service Call</Link>
                <Link to="/dashboard" className="navbar-item">New Customer</Link>
                <Link to="/dashboard" className="navbar-item">All Customers</Link>
                <Link to="/dashboard" className="navbar-item">Look Up Customer</Link>
                <Link to="/dashboard" className="navbar-item">All Technicians</Link>
            </div>
        </nav>
        
    )
}

export default Navbar;
