import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {loadAllUsers} from '../../redux/actions/actionCreator';
const Statistics:React.FC =()=>{

 
    const allUsers=useSelector((store:any)=>store.loadAllUsers);
 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllUsers());
    },[]);
    
    const usersSoted = allUsers.slice(0);
    usersSoted.sort(function(firstUser:any,lastUser:any) {
         return lastUser.totalScore - firstUser.totalScore;
    });
         
    console.log('all users', usersSoted)
    return(
    <div>Statistics=====
       <div>
						
			 
                {usersSoted && usersSoted.map((user:any)=>
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