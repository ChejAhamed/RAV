
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import scoreQuiz from '../../redux/reducers/addScoreQuizReducer';
import actionTypes from '../../redux/actions/actionTypes';

interface Score{
  score:number
}

const StartQuiz:React.FC =()=>{
  const authUser=useSelector((store:any)=>store.authUser)
  console.log("authtificated user Start QUiz", authUser)
  const {numberOfQinQuiz, choosenTheme} = useSelector((store:any) => store.activeQuiz);
  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();
  console.log("quiiiz",quizz)
  /*function updatingScore():any {
    dispatch(scoreQuiz(score))
  }
 */
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false);
  const [totalScore, setTotalScore] = React.useState(0)
  
  
  
 

  useEffect(() => {
    dispatch(loadAllQuiz());

    },[]);
    
  useEffect(() => {
    const result = totalScore + score;
    setTotalScore(result)
    console.log('h',result)
    dispatch({
      type: actionTypes.TOTAL_SCORE,
      data: result
      
    })

    },[showScore]);

  
    const filteredQuiz= quizz.filter(({category}: any)=>
    category===choosenTheme );   

  const quizSelected=filteredQuiz.slice(0,numberOfQinQuiz)
  
  




  const handleAnswerButton=(isCorrect:any)=>{
    
    if (isCorrect) {
      
      setScore(score + 1);
      dispatch({
        type: actionTypes.SCORE_QUIZ,
        data: score
      })
    
		}
    
     const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizSelected.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
      
		}
    
    
    console.log("score"+ score)
      console.log("total "+totalScore)
    
  }
  
    return(
    <div className="score">
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {quizSelected?.length}
          
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quizSelected?.length}
						</div>
						<div className='question-text'>{quizSelected[currentQuestion]?.question}</div>
					</div>
					<div className='answer-section'>
						{quizSelected[currentQuestion]?.answers?.map((answer:any) => (
							<button key={answer?._id} onClick={() => handleAnswerButton(answer?.isCorrect)} >{answer?.text + `${answer?.isCorrect}`}</button>
						))}
					</div>
				</>
			)}
		</div>











       



    </div>
    )
}
export default StartQuiz;