import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import StartQuiz from '../StartQuiz/StartQuiz';
import { Link } from 'react-router-dom';
import {checkActiveQuiz } from '../../redux/actions/actionCreator'



const Dashboard = () => {
  
  let activeQuiz={
    numberOfQinQuiz: 0,
    choosenTheme:"",
  }
  const dispatch= useDispatch();
  function ActivingQuiz():any {
    dispatch(checkActiveQuiz(activeQuiz))
  }

  const [disableSubmitNumberButton, setDisableSubmitNumberButton] = useState(false);
  const [disableSubmitThemeButton, setDisableSubmitThemeButton] = useState(false);
  
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);
  const handlerTheme=(themeSelected: string)=>{
    return (event: React.MouseEvent) => {
       activeQuiz.choosenTheme=themeSelected;
      console.log(activeQuiz.choosenTheme)
      setDisableSubmitThemeButton(true)
      
      
      }
      
    }
    console.log(activeQuiz.choosenTheme);
    console.log(activeQuiz.numberOfQinQuiz);
    const handlerQuestionNumber=(numberOfQuizSelected: number)=>{
      return (event: React.MouseEvent) => {
        activeQuiz.numberOfQinQuiz=numberOfQuizSelected;
        console.log(activeQuiz.numberOfQinQuiz)
        setDisableSubmitNumberButton(true)
        console.log(activeQuiz)
          
        }
      }
      
        useEffect(() => {
          if (disableSubmitNumberButton && disableSubmitThemeButton)  {
            setDisableSubmitButton(false)}
          
        });
  const handlerSubmit=(themeSelected: any, numberOfQuizSelected: any)=>{
    return (event: React.MouseEvent) => {
      activeQuiz.choosenTheme=themeSelected;
      activeQuiz.numberOfQinQuiz=numberOfQuizSelected;
    if(activeQuiz.choosenTheme!==""){
      console.log("no theme");
    }
    ActivingQuiz()
    console.log(activeQuiz.choosenTheme);
    console.log(activeQuiz.numberOfQinQuiz);
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
          <Link to="/startquiz"> 
            <button type='button' disabled={disableSubmitButton} onClick={handlerSubmit(handlerQuestionNumber,handlerTheme)}>Start Quiz</button>
         </Link> 
          </div>
          <div className='reset'>

            
                <button type='button'  onClick={handlerResetOptions(activeQuiz.numberOfQinQuiz ,activeQuiz.choosenTheme)}>Reset Choice</button>
            

          </div>
          
        </div>


      
     
        
    </div>
  );
};
export default Dashboard;
