import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalScoreUpdate, updateUser } from '../../redux/actions/actionCreator';
import './Header.scss'
import { loadAllUsers } from '../../redux/actions/actionCreator';
const Header:React.FC =()=>{
  
  const user=useSelector((store:any)=>store.loggedUser?.user?.user)

  const totalScore=useSelector((store:any)=>store.loggedUser)
  const finalScore=useSelector((store:any)=>store.loggedUser?.user?.user?.totalScore)
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(loadAllUsers());
    dispatch(updateUser(totalScore))

    },[]);
  
  
 
   //<img  className="header__logo-img"src="https://i.ibb.co/CHH98h7/1.png" alt="logo" />
  
  return(
        <header className="header">
           
                <div className="header__logo-container">
                  <div className="header_logo-top">
                  <h1>  R       A      V</h1>
                  </div>
                  <div className="header_logo-button">
                  <h4>React  Angulor  Vue</h4>
                  
                  </div>
                </div>
                <div className="header__user-container">
                    <div className="header__name-container">
                      <p className="header__user-name">Name:{user?.name}</p>
                    </div>
                    <div className="header__score-container">
                      <p className="header__score-text">Total Score:{finalScore}</p>
                    </div>
                    <div className="header__quiz-container">
                        <p className="header__quiz-text">Quiz Completed:{user?.quizCompleted}</p>
                    </div>
                      
                    <div className="header__avatar-container">
                        <img className="header__avatar-img" src={user?.avatar} width="50" height="70" alt="avatar" />
                    </div>
                       
                  </div>
                  <div className="header__nav-container">
                    <nav className="header__navegator">
                      <Link className="header__nav-link" to="/dashboard">Dashboard</Link>
                      <Link className="header__nav-link" to="/profile">Profile</Link>
                      <Link className="header__nav-link" to="/statistics">Statistics</Link>
                  </nav>
                </div>
        
      </header>
    )
}
export default Header;