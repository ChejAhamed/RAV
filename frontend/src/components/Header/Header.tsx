import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header:React.FC =()=>{
  const totalScore= useSelector((store:any)=>store.totalScore)
    return(
        <header>
        <h2>HEADEERRR</h2>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
        <p>Toal:</p>
      </header>
    )
}
export default Header;