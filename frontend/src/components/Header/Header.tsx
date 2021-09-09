import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header:React.FC =()=>{
  const totalScore= useSelector((store:any)=>store.totalScore)
  const user=useSelector((store:any)=>store.user)
  console.log(totalScore)
  console.log(user)
  return(
        <header>
        <h2>HEADEERRR</h2>
         <p>{user?.name}</p>
         <p>{totalScore}</p>
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