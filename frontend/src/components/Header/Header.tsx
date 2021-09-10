import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreator';
import loginData from '../../pages/Login/Login'
import userRefreshToken from '../../redux/actions/authActionCreator';


const Header:React.FC =()=>{
  const totalScore= useSelector((store:any)=>store.totalScore)
  const user=useSelector((store:any)=>store.users)
  const [storage,setStorage]=useState(null)
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const dispatch = useDispatch();
   useEffect(()=>{
     setStorage(JSON.parse(localStorage.getItem("userData") || ""))
     },[])

     useEffect(() => {
      dispatch(userRefreshToken( refreshToken));
    }, []);

   const sessionPersistence =()=>{
     if(storage!=="userData"){
      dispatch( userRefreshToken(refreshToken) )
     }
   }
 sessionPersistence();
  return(
        <header>
        <h2>HEADEERRR</h2>
         <p>Name:{user}</p>
         <p>Total Score:{totalScore}</p>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
        
      </header>
    )
}
export default Header;