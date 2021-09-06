import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import QuestionCard from '../QuestionCard/QuestionCard';

import { Difficulty } from '../../API';

const TOTAL_QUESTIONS=10;
 /*let quizz = [
    {
      question: 'pregunta1',
      alternative: [{text: 'r1'}, {text: 'r2'}, {text: 'r3'}],
    },
    {
      question: 'pregunta1',
      alternative: [{text: 'r1'}, {text: 'r2'}, {text: 'r3'}],
    },
  ];*/
const Dashboard = () => {


  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();

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
           <ul>{quiz.answers?.map((answer: any) => 
              <li key={answer?.text}>
                respuesta:{answer?.text}
              </li>
            
              )}
            </ul>
            </div>)}
        </ul> 

    </div>
  );
};
export default Dashboard;
