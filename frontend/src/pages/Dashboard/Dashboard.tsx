import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import QuestionCard from '../QuestionCard/QuestionCard';

import { Difficulty } from '../../API';

const TOTAL_QUESTIONS=10;
 /*let quizz = [
    {
      description: 'pregunta1',
      alternative: [{text: 'r1'}, {text: 'r2'}, {text: 'r3'}],
    },
    {
      description: 'pregunta1',
      alternative: [{text: 'r1'}, {text: 'r2'}, {text: 'r3'}],
    },
  ];*/
const Dashboard = () => {


  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllQuiz());
  },[]);
  
  const startQuiz = async () => {

  };
  const checkAnswer = (event:React.MouseEvent<HTMLButtonElement>) => {

  };
  const nextQuestion = () => {

  };
  return (
    <div>
      
      <h1>DASHBOARD</h1>
      <button className="start" onClick={startQuiz}> </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
        
       <ul> DD:{ quizz?.map((quiz: any) => 
         <>
           <li key={quiz.description}>
            Pregunta: {quiz?.description}
           </li>
           {console.log(quiz?.description)}
           {''}
           <ul>{quiz.alternatives?.map((alternative: any) => 
              <li key={alternative?.text}>
                respuesta:{alternative?.text}
                {console.log(alternative?.text)}
              </li>
            
              )}
            </ul>
            </>)}
        </ul> 
        
      


      {/*<QuestionCard
      questionNumber={number+1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question} 
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]:undefined}
      callback={checkAnswer}

      />*/}
      <button className="next" onClick={nextQuestion}>Next Question</button>

    </div>
  );
};
export default Dashboard;
