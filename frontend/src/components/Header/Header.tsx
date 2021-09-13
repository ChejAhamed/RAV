import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreator';
import loginData from '../../pages/Login/Login'

import { loadAllQuiz } from '../../redux/actions/actionCreator';
import './Header.css'
import { loadAllUsers } from '../../redux/actions/actionCreator';
const Header:React.FC =()=>{
  
  const user=useSelector((store:any)=>store.loggedUser?.user?.user)

  const quizz= useSelector((store:any)=>store.quiz)
 console.log("useer dashboard", user?.name)
 
  const dispatch = useDispatch();
  const allUsers=useSelector((store:any)=>store.loadAllUsers)
  useEffect(() => {
    dispatch(loadAllUsers());

    },[]);

  
 
  
  
  return(
        <header>
            <div>
                <div className="logo">
                  <img src="https://i.ibb.co/rfLVZ9f/logo.png" alt="logo" width="80" height="60"/>
                </div>
                <div className="user_details">
                    <div className="user_details--name">
                      <p>Name:{user?.name}</p>
                    </div>
                    <div className="user_details--name">
                      <p>Total Score:{user?.totalScore}</p>
                    </div>
                    <div className="user_details--name">
                        <p>Quiz Completed:{user?.quizCompleted}</p>
                    </div>
                      
                    <div className="user_details--avatar">
                        <img src={user?.avatar} width="50" height="70" alt="avatar" />
                    </div>
                       
                  </div>
                  <div className="nav">
                    <nav>
                      <Link to="/dashboard">Dashboard</Link>
                      <Link to="/profile">Profile</Link>
                      <Link to="/statistics">Statistics</Link>
                  </nav>
                </div>
        </div>
      </header>
    )
}
export default Header;