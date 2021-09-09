import React from 'react';
import { useSelector } from 'react-redux';
const Register:React.FC =()=>{
    const score = useSelector((store:any)=>store.score)
    console.log(score)
    return(
    <div>Register=====
    </div>
    )
}
export default Register