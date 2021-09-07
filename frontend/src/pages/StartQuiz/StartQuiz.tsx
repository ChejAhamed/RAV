
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import numberOfQinQuiz  from '../Dashboard/Dashboard'

import { Difficulty } from '../../API';
import EndQuiz from '../EndQuiz/EndQuiz';
import Dashboard from '../Dashboard/Dashboard';


const StartQuiz:React.FC =()=>{
  const activeQuiz = useSelector((store:any) => store.activeQuiz);
  console.log(activeQuiz.numberOfQinQuiz)
  console.log(activeQuiz.choosenTheme);
  console.log(activeQuiz);
    const [question, setNextQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
  
    const quizz= useSelector((store:any)=>store.quiz)
    const dispatch = useDispatch();


    const handleAnswerButtonClick = (answers:any) => {
    const nextQuestion = question + 1;
    setNextQuestion(nextQuestion);
    if (nextQuestion < quizz.question.length) {
      setNextQuestion(nextQuestion);
      console.log(quizz.question.length)
    } else {
      setShowScore(true);;
    }
  };

  useEffect(() => {
    dispatch(loadAllQuiz());
  },[]);
    return(
    <div>
      



         {//render componet thta show score and give confety
       }
       {false ? (
         
         <EndQuiz />
        
       ):

       <div className="Questions">
           <div>
             <button type="button" >Logger</button>
             
          </div>
          <p className="score">Score:</p>
          <p>Loading Questions...</p>
            
          <ul> DD:{ quizz?.map((quiz: any) => 
            <div key={quiz?.question}>
              <li>
                Pregunta: {quiz?.question}
              </li>
              {''}
              <ul>{quiz?.answers?.map((answer: any) => 
                  <button type="button" key={answer?.text} onClick={() => handleAnswerButtonClick(answer?.isCorrect)}>
                    respuesta:{answer?.text}
                  </button>
                
                  )}
                </ul>
                </div>)}
            </ul> 
        </div>
        }
    </div>
    )
}
export default StartQuiz