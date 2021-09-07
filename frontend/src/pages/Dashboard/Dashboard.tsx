import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const TOTAL_QUESTIONS=10;

const Dashboard = () => {

  
  //-----------DASHBOARD
  let numberOfQinQuiz= 0;
  let  choosenTheme="";

  const [disableSubmitNumberButton, setDisableSubmitNumberButton] = useState(false);
  const [disableSubmitThemeButton, setDisableSubmitThemeButton] = useState(false);
  
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);
  const handlerTheme=(themeSelected: string)=>{
    return (event: React.MouseEvent) => {
       choosenTheme=themeSelected;
      console.log(choosenTheme)
      setDisableSubmitThemeButton(true)
      
      }
      
    }
    const handlerQuestionNumber=(numberOfQuizSelected: number)=>{
      return (event: React.MouseEvent) => {
         numberOfQinQuiz=numberOfQuizSelected;
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
    let quizTheme=themeSelected;
    let quizNumber=numberOfQuizSelected;
    
    console.log(quizTheme);
    console.log(quizNumber);
    }
  
  }
  const handlerResetOptions=(numberOfQinQuiz:number, choosenTheme:string)=>{
    return (event: React.MouseEvent) => {
    if (disableSubmitNumberButton || disableSubmitThemeButton === true){
      numberOfQinQuiz= 0;
      choosenTheme="";
      console.log(numberOfQinQuiz);
      console.log(choosenTheme)
      alert('Please choose wisely!')
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
            <button className='button'  onClick={handlerResetOptions(numberOfQinQuiz ,choosenTheme)}>Reset Choice</button>
          
          </div>
          
        </div>


      
     
        
    </div>
  );
};
export default Dashboard;
