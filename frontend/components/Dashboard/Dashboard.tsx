import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";



const Dashboard =()=>{
    const startQuiz=async()=>{

    }
    const checkAnswer=(event:React.MouseEvent<HTMLButtonElement>)=>{

    }
    const nextQuestion = ()=>{

    }
    return(
        <div>Dashboard
            <h1>React Quiz</h1>
            <button className='start' onClick={startQuiz}> </button>
            <p className='score'>Score:</p>
            <p >Loading Questions...</p>
            <QuestionCard />
            <button className="next" onClick={nextQuestion}>Next Question</button>

        </div>
    )
}
export default Dashboard