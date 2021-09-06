import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import QuestionCard from '../QuestionCard/QuestionCard';

import { Difficulty } from '../../API';

const TOTAL_QUESTIONS=10;

const Dashboard = () => {

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
  
  
  
  return (
    <div>
      
      <h1>DASHBOARD</h1>
      
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
  );
};
export default Dashboard;
