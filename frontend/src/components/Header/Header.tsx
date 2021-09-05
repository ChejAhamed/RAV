import React from 'react';
import { Link } from 'react-router-dom';

const Header:React.FC =()=>{
    return(
        <header>
        <h1>HEADEERRR</h1>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/Profile">Profile</Link>
        </nav>
      </header>
    )
}
export default Header