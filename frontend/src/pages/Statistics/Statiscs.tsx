import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import loadAllUsers from '../../redux/reducers/loadAllUsersReducer';
const Statistics:React.FC =()=>{
    const allUsers=useSelector((store:any)=>store.loadAllUsers)
    
    const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);


    return(
    <div>Statistics=====
       <div className='question-section'>
						
					
					
        </div>
    </div>
    )
}
export default Statistics;