import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreator';
import loginData from '../../pages/Login/Login'
import userRefreshToken from '../../redux/actions/authActionCreator';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import './Header.css'
import { loadAllUsers } from '../../redux/actions/actionCreator';
const Header:React.FC =()=>{
  const totalScore= useSelector((store:any)=>store.totalScore)
  const user=useSelector((store:any)=>store.users)
  const quizz= useSelector((store:any)=>store.quiz)
 
  
  const dispatch = useDispatch();
  const allUsers=useSelector((store:any)=>store.loadAllUsers)
  useEffect(() => {
    dispatch(loadAllUsers());

    },[]);
  const totalScoreStore =useSelector((store:any)=>store.totalScore)
  console.log("@theaderrotal", totalScoreStore)
  
 console.log("headerr users ",allUsers)
 
  
  useEffect(() => {
    dispatch(loadAllQuiz());

    },[]);

// console.log("new total scoe",userStoredLocalStorage.user?.user?.score)
//    useEffect(()=>{
//      setStorage(JSON.parse(localStorage.getItem("userData") || ""))
//      },[])

     useEffect(() => {
      dispatch( login(user));
    }, []);

  //  const sessionPersistence =()=>{
  //    if(storage!=="userData"){
  //     dispatch( userRefreshToken( refreshToken) )
  //    }
  //  }
    
  //  sessionPersistence();
  
  return(
        <header>

        <h2>HEADEERRR</h2>
         <p>Name:</p>
         <p>Total Score:</p>
         <p>Quiz Completed:</p>
         <img src="" width="50" height="70" alt="avatar" />
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
        
      </header>
    )
}
export default Header;