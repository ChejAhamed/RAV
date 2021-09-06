import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import QuestionCard from '../QuestionCard/QuestionCard';

import { Difficulty } from '../../API';
import EndQuiz from '../EndQuiz/EndQuiz';

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
      <div className='quizFilter'>
        <div className='technology'>
        <h2>Choose the theme of the quiz</h2>
          <div className='technology-options'>
            <button className='button'>REACT</button>
            <button className='button'>ANGULAR</button>
            <button className='button'>VUE</button>
            <button className='button'>JS</button>
          </div>
        </div>
        <div className='numberOfQuiz'></div>

        <h2>Choose the number of the quiz</h2>
          <div className='number-options'>
            <button className='button'>5</button>
            <button className='button'>10</button>
            <button className='button'>15</button>
            <button className='button'>20</button>
          </div>
      </div>

      
      {//render componet thta show score and give confety
       }
       {false ? (
         
         <EndQuiz />

       ):

       <div className="Questions">
      
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
  );
};
export default Dashboard;
