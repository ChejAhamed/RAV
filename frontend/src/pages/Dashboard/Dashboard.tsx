import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../QuestionCard/QuestionCard';
import {fetchQuizQuestions} from '../../API'
import { Difficulty } from '../../API';
const TOTAL_QUESTIONS=10;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true);
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))
  const startQuiz = async () => {

  };
  const checkAnswer = (event:React.MouseEvent<HTMLButtonElement>) => {

  };
  const nextQuestion = () => {

  };
  return (
    <div>
      Dashboard
      <h1>DASHBOARD</h1>
      <button className="start" onClick={startQuiz}> </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
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
