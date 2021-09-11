import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import loadAllUsers from '../../redux/reducers/loadAllUsersReducer';
const Statistics:React.FC =()=>{
    const allUsers=useSelector((store:any)=>store.loadAllUsers)
    console.log("authtificated user login",allUsers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllUsers());
    
        },[]);
    return(
    <div>Statistics=====
       <div className='question-section'>
						
					
					
        </div>
    </div>
    )
}
export default Statistics;