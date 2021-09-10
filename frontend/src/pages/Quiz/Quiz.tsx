import React from 'react';
import { useSelector } from 'react-redux';
const Quiz:React.FC =()=>{
    const score = useSelector((store:any)=>store.score)
    console.log(score)
    return(
    <div>Quiz Manager=====
    </div>
    )
}
export default Quiz