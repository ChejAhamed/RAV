
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { loadAllQuiz, totalScoreUpdate, updateUser } from '../../redux/actions/actionCreator';
import scoreQuiz from '../../redux/reducers/addScoreQuizReducer';
import actionTypes from '../../redux/actions/actionTypes';
import {loadAllUsers} from '../../redux/actions/actionCreator'
import './StartQuiz.scss'
interface Score{
  score:number
}

const StartQuiz:React.FC =()=>{
  const authUser=useSelector((store:any)=>store.authUser)
  const {numberOfQinQuiz, choosenTheme} = useSelector((store:any) => store.activeQuiz);
  const {user}=useSelector((store:any)=>store.loggedUser)
  const quizzCompletedUpdate=useSelector((store:any)=>store.loggedUser?.user?.user?.quizCompleted)
  
  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false);
  const [totalScore, setTotalScore] = React.useState(user?.totalScore)
  const [quizCompleted, setQuizCompleted ]= React.useState(quizzCompletedUpdate)

  // const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
//  const token2= localStorage.getItem('jwt');
//  const refreshToken2=localStorage.getItem('jwt')

  
  /*function updatingScore():any {
    dispatch(scoreQuiz(score))
  }
 */
 
  
  useEffect(() => {
    dispatch(loadAllUsers());
    dispatch(loadAllQuiz());
    

    },[]);
    
  
 

  
    
  useEffect(() => {

    const value= user.user.totalScore+score;
   const  userId=user.user._id
    setTotalScore(value)
  
    
    dispatch(updateUser("totalScore",value,userId))
    dispatch(updateUser("quizCompleted",quizCompleted,userId))
    
    },[showScore]);

 
    const filteredQuiz= quizz.filter(({category}: any)=>
    category===choosenTheme );

  

  const quizSelected=filteredQuiz.slice(0,numberOfQinQuiz)
  
 




  const handleAnswerButton=(isCorrect:any)=>{
    
    if (isCorrect) {
      
      setScore(score + 1);
      // dispatch({
      //   type: actionTypes.SCORE_QUIZ,
      //   data: score
      // })
     
		}
    
     const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizSelected.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
      setQuizCompleted(quizCompleted+1)
		}
    
  
   
    
  }
  
    return(
    <div className="startquiz">
          <div className='startquiz__score-container'>
            {showScore ? (
              <div className='startquiz__score-item'>
               <p className="startquiz__score-text"> You scored {score} out of {quizSelected?.length}</p>
                
              </div>
            ) : (
              <>
                <div className="startquiz__quiz-container">
                  <div className='startquiz__quiz-box'>
                    <p className="startquiz__quiz-item">Question {currentQuestion + 1} <span>/{quizSelected?.length}</span> </p>
                    <p className='startquiz__quiz-element'>{quizSelected[currentQuestion]?.question}</p>
                  </div>
                  <div className='startquiz__quiz-answer-box'>
                  {quizSelected[currentQuestion]?.answers?.map((answer:any) => (
                    <button className='startquiz__quiz_answer-button' key={answer?._id} onClick={() => handleAnswerButton(answer?.isCorrect)} >{answer?.text + `${answer?.isCorrect}`}</button>
                  ))}
                </div>
                </div>
              </>
            )}
          </div>


    </div>
    )
}
export default StartQuiz;