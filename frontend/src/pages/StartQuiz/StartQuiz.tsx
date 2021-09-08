
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { loadAllQuiz } from '../../redux/actions/actionCreator';
import EndQuiz from '../EndQuiz/EndQuiz';



const StartQuiz:React.FC =()=>{
  const {numberOfQinQuiz, choosenTheme} = useSelector((store:any) => store.activeQuiz);
  const quizz= useSelector((store:any)=>store.quiz)
  const dispatch = useDispatch();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  


 console.log(score)
  useEffect(() => {
    dispatch(loadAllQuiz());

  },[]);

  
    const filteredQuiz= quizz.filter(({category}: any)=>
    category===choosenTheme
    );   

  //setCurrentQuiz(quizFilter)
  console.log('filtradoo',filteredQuiz);
  

  


  const handleAnswerButton=(isCorrect:any)=>{
    console.log('hola', isCorrect)
    console.log(score)
    if (isCorrect) {
			setScore(score + 1);
		}
    
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < filteredQuiz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  }
  console.log(filteredQuiz)
    return(
    <div className="score">
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {filteredQuiz?.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{filteredQuiz?.length}
						</div>
						<div className='question-text'>{filteredQuiz[currentQuestion]?.question}</div>
					</div>
					<div className='answer-section'>
						{filteredQuiz[currentQuestion]?.answers?.map((answer:any) => (
							<button key={answer?._id} onClick={() => handleAnswerButton(answer?.isCorrect)}>{answer?.text + `${answer?.isCorrect}`}</button>
						))}
					</div>
				</>
			)}
		</div>











       {

console.log(filteredQuiz[currentQuestion]?.question)}
{console.log(filteredQuiz[currentQuestion]?.answers.text)}

{

       /*
       <div className='app'>
		
		
	
          <p className="score">Score:</p>
          <p>FILTERED</p>

          <p>Loading Questions...</p>
         
            
          <div> DD:{ filteredQuiz?.map((quiz: any) => 
            <div key={quiz?.question}>
              <h3>
               {quiz?.question}
              </h3>
              {''}
              <div>{quiz?.answers?.map((answer: any) => 
                 <button type="button" key={answer?.text} onClick={() => handleAnswerButton(answer.isCorrect)}>
                  {answer?.text}
                  </button>
                  
                
                  )}
                </div>
                </div>)}
            </div> 
        </div>*/
        }
    </div>
    )
}
export default StartQuiz;