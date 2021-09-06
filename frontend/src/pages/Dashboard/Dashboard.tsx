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
  //-----------DASHBOARD
  const [disableSubmitNumberButton, setDisableSubmitNumberButton] = useState(false);
  const [disableSubmitThemeButton, setDisableSubmitThemeButton] = useState(false);
  
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);
  const handlerTheme=(themeSelected: String)=>{
    return (event: React.MouseEvent) => {
      const choosenTheme=themeSelected;
      console.log(choosenTheme)
      setDisableSubmitThemeButton(true)
      
      }
      
    }
    const handlerQuestionNumber=(numberOfQuizSelected: Number)=>{
      return (event: React.MouseEvent) => {
        const numberOfQinQuiz=numberOfQuizSelected;
        console.log(numberOfQinQuiz)
        setDisableSubmitNumberButton(true)
        
          
        }
      }
      
        useEffect(() => {
          if (disableSubmitNumberButton && disableSubmitThemeButton)  {
            setDisableSubmitButton(false)}
        });
  const handlerSubmit=(themeSelected: any, numberOfQuizSelected: any)=>{
    return (event: React.MouseEvent) => {
    const quizTheme=themeSelected;
    const quizNumber=numberOfQuizSelected;
    /*if (quizTheme && quizNumber){

      //render StartQuiz
    } else{
      <h2>Please select a Theme and number Quiz</h2>
      console.log('Please select a Theme and number Quiz')
    }*/
    console.log(quizTheme);
    console.log(quizNumber);
    }
  
  }
  const handlerResetOptions=()=>{
    return (event: React.MouseEvent) => {
    if (disableSubmitButton===false){
      setDisableSubmitButton(true)
    }
    }
  }
  return (
    
    <div>
     
      <div className='quizFilter'>
        <div className='technology'>
        <h2>Choose the theme of the quiz</h2>
          <div className='technology-options'>
            <button className='button'onClick={handlerTheme("REACT")}>REACT</button>
            <button className='button'onClick={handlerTheme("ANGULAR")}>ANGULAR</button>
            <button className='button'onClick={handlerTheme("VUE")}>VUE</button>
            <button className='button'onClick={handlerTheme("JS")}>JS</button>
          </div>
        </div>
        <div className='numberOfQuiz'></div>

        <h2>Choose the number of the quiz</h2>
          <div className='number-options'>
            <button className='button' onClick={handlerQuestionNumber(5)}>5</button>
            <button className='button' onClick={handlerQuestionNumber(10)}>10</button>
            <button className='button' onClick={handlerQuestionNumber(15)}>15</button>
            <button className='button' onClick={handlerQuestionNumber(20)}>20</button>
          </div>
          
        </div>
        <div>
        <h2>Ready?</h2>
          <div className='submit'>
            <button className='button' disabled={disableSubmitButton} onClick={handlerSubmit(handlerQuestionNumber,handlerTheme)}>Start Quiz</button>
          
          </div>
          <div className='reset'>
            <button className='button'  onClick={handlerResetOptions()}>Reset Choice</button>
          
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
