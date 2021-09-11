import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreator';
import loginData from '../../pages/Login/Login'
import userRefreshToken from '../../redux/actions/authActionCreator';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import usersReducer from '../../redux/reducers/userReducer';
import authUserReducer from '../../redux/reducers/authReducers';

const Header:React.FC =()=>{
  const totalScore= useSelector((store:any)=>store.totalScore)
  const user=useSelector((store:any)=>store.users)
 
  const [storage,setStorage]=useState(null)
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const dispatch = useDispatch();
  
  const authUser=useSelector((store:any)=>store.authUser)


   useEffect(()=>{
     setStorage(JSON.parse(localStorage.getItem("userData") || ""))
     },[])

     useEffect(() => {
      dispatch( login(user));
    }, []);

   const sessionPersistence =()=>{
     if(storage!=="userData"){
      dispatch( userRefreshToken( ) )
     }
   }
    
   /*useEffect(() => {
    dispatch(loadAllQuiz(token, refreshToken));

    },[]);
 */
  return(
        <header>

        <h2>HEADEERRR</h2>
         <p>Name:{authUser.user?.user?.name}</p>
         <p>Total Score:{totalScore}</p>
         <p>Quiz Completed:{authUser.user?.user?.quizCompleted}</p>
         <img src={authUser?.user?.user?.avatar} width="50" height="70" alt="avatar" />
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
        
      </header>
    )
}
export default Header;