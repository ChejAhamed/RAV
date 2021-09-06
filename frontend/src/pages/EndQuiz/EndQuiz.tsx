import React from 'react';
import { Link } from 'react-router-dom';


const EndQuiz
:React.FC =()=>{
    return(
    <div>
        <h2>End Of Quiz</h2>
       
        <Link to="/dashboard"> 
            <button type='button' >
                Back to Dashboard
            </button>
        </Link>
    </div>
    )
}
export default EndQuiz;
