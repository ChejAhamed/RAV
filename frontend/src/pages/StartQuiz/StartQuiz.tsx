
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import EndQuiz from '../EndQuiz/EndQuiz';



const StartQuiz:React.FC =()=>{
  const {numberOfQinQuiz, choosenTheme} = useSelector((store:any) => store.activeQuiz);
  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();
  
  
  console.log(numberOfQinQuiz)
  console.log(choosenTheme)



  useEffect(() => {
    dispatch(loadAllQuiz());

  },[]);

  
    const filteredQuiz= quizz.filter(({category}: any)=>
    category===choosenTheme
    );   

  //setCurrentQuiz(quizFilter)
  console.log('filtradoo',filteredQuiz);
  
  const handleAnswerButtonClick=()=>{
      ///check if answer is correct
  }
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
          <p>FILTERED</p>

          <p>Loading Questions...</p>
         
            
          <ul> DD:{ filteredQuiz?.map((quiz: any) => 
            <div key={quiz?.question}>
              <li>
                Pregunta: {quiz?.question}
              </li>
              {''}
              <ul>{quiz?.answers?.map((answer: any) => 
                  <button type="button" key={answer?.text} onClick={() => handleAnswerButtonClick(/*answer?.isCorrect*/)}>
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
export default StartQuiz;