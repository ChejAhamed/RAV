import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Profile:React.FC =()=>{
    const score = useSelector((store:any)=>store.score)
    console.log(score)
    return(
    <div>Profile=====
    </div>
    )
}
export default Profile