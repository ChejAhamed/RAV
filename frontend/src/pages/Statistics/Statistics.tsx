import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {loadAllUsers} from '../../redux/actions/actionCreator';
const Statistics:React.FC =()=>{
const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
    //const allUsers=useSelector((store:any)=>store.loadAllUsers)
    const allUsers=useSelector((store:any)=>store.loadAllUsers);
   //const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllUsers());
       },[]);
       useEffect(() => {
        
       },[allUsers]);
    console.log('all users', allUsers)
    return(
    <div>Statistics=====
       <div>
						
			 
                {allUsers && allUsers.map((user:any)=>
                <div>
                <p>Name:{user.name}</p>
                <p>Total Score:{user?.totalScore}</p>
                <p>Quiz Completed:{user?.quizCompleted}</p>
                </div>
            )} 
          	
					
        </div>
    </div>
    )
}
export default Statistics;