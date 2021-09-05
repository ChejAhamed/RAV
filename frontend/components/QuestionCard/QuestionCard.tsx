import React from 'react';

type Props={
    question:string,
    answers:string[],
    callback:any,
    userAnswer:any,
    questionNumber:number,
    totalQuestions:number
}
const QuestionCard:React.FC<Props> =({question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions})=>{
    return(
    <div>Questio Card
        <p className='number'>
            Question:{question}/{totalQuestions}

        </p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        {answers.map(answer=>(
            <div>
                <button disabled={userAnswer} onClick={callback}> 
                <span dangerouslySetInnerHTML={{__html:answer}}></span></button>
            </div>
        ))}
    </div>
    )
}
export default QuestionCard