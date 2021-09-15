import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Statistics.scss'
import {loadAllUsers} from '../../redux/actions/actionCreator';
const Statistics:React.FC =()=>{

    const isAuthenticated=useSelector((authUser)=>authUser)
   
    const allUsers=useSelector((store:any)=>store.loadAllUsers);
   
    const dispatch = useDispatch();
    const loggedUser=useSelector((loggedUser)=>loggedUser)
    
    useEffect(() => {
        dispatch(loadAllUsers());
    },[]);
    
    const usersSoted = allUsers.slice(0);
    usersSoted.sort(function(firstUser:any,lastUser:any) {
         return lastUser.totalScore - firstUser.totalScore;
    });
         
    
    return(
    <div className="statistics">
        <div className="top_player">
            <h3>Top Players</h3>
        </div>
        <div className="statistics_container">
						
			 
                {usersSoted && usersSoted.map((user:any)=>
                <div className="user_sorted">
                <div className="user_sorted--name">
                <p>Name: </p> <p>{user.name}</p>

                </div>
                <div className="user_sorted--score">
                <p>Total Score: </p> <p>{user.totalScore}</p>
                </div>
                                   
                <div className="user_sorted--quizcompleted">
                <p>Quiz Completed: </p> <p>{user.quizCompleted}</p>
                </div>

             </div>
            )} 
          	
					
        </div>
    </div>
    )
}
export default Statistics;