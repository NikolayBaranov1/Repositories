import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
    return(
        <div className="div_links">
            <NavLink to="/" className="col-lg-2 m-auto links">Home</NavLink>
            <NavLink to="/Favourites" className="col-lg-2 m-auto links">Favourites</NavLink>
        </div>
    )
} 

export default Navigation;