import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkActiveQuiz } from '../../redux/actions/actionCreator';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const authUser = useSelector((store: any) => store.authUser);

  const dispatch = useDispatch();
  function ActivingQuiz(): any {
    dispatch(checkActiveQuiz(activeQuiz));
  }
  const [activeQuiz, setActiveQuiz] = useState({
    numberOfQinQuiz: 0,
    choosenTheme: '',
  });
  const [
    disableSubmitNumberButton,
    setDisableSubmitNumberButton,
  ] = React.useState(false);
  const [
    disableSubmitThemeButton,
    setDisableSubmitThemeButton,
  ] = React.useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = React.useState(true);

  useEffect(() => {});

  const handlerTheme = (themeSelected: string) => {
    return (event: React.MouseEvent) => {
      activeQuiz.choosenTheme = themeSelected;

      setDisableSubmitThemeButton(true);
    };
  };

  const handlerQuestionNumber = (numberOfQuizSelected: number) => {
    return (event: React.MouseEvent) => {
      activeQuiz.numberOfQinQuiz = numberOfQuizSelected;

      setActiveQuiz;
      setDisableSubmitNumberButton(true);
    };
  };

  useEffect(() => {
    if (disableSubmitNumberButton && disableSubmitThemeButton) {
      setDisableSubmitButton(false);
    }
  });
  const handlerSubmit = (numberOfQuizSelected: any, themeSelected: any) => {
    return (event: React.MouseEvent) => {
      activeQuiz.choosenTheme = themeSelected;
      activeQuiz.numberOfQinQuiz = numberOfQuizSelected;

      ActivingQuiz();
    };
  };

  const handlerResetOptions = (
    numberOfQinQuiz: number,
    choosenTheme: string
  ) => {
    return (event: React.MouseEvent) => {
      if (disableSubmitNumberButton || disableSubmitThemeButton === true) {
        numberOfQinQuiz = 0;
        choosenTheme = '';
        alert('Please choose wisely!');
      }
    };
  };

  return (
    <div className='dashboard'>
      <div className='quizFilter'>
        <div className='technology'>
          <h2>Choose the subject of the quiz</h2>
          <div className='technology-options'>
            <button
              className='button-react'
              onClick={handlerTheme('REACT')}
            ></button>
            <button
              className='button-angular'
              onClick={handlerTheme('ANGULAR')}
            ></button>
            <br />
            <button
              className='button-vue'
              onClick={handlerTheme('VUE')}
            ></button>
            <button className='button-js' onClick={handlerTheme('JS')}></button>
          </div>
        </div>
        <div className='numberOfQuiz'></div>

        <h2>Choose the number of the quiz</h2>
        <div className='number-options'>
          <button className='btn-secondary' onClick={handlerQuestionNumber(5)}>
            5
          </button>
          <button className='btn-secondary' onClick={handlerQuestionNumber(10)}>
            10
          </button>
          <br />
          <button className='btn-secondary' onClick={handlerQuestionNumber(15)}>
            15
          </button>
          <button className='btn-secondary' onClick={handlerQuestionNumber(20)}>
            20
          </button>
        </div>
      </div>
      <div className='sumbit_container'>
        <h2>Ready?</h2>
        <div className='submit'>
          <Link to='/startquiz'>
            <button
              className='btn-primary'
              type='button'
              disabled={disableSubmitButton}
              onClick={handlerSubmit(
                activeQuiz.numberOfQinQuiz,
                activeQuiz.choosenTheme
              )}
            >
              Start Quiz
            </button>
          </Link>
        </div>
        <div className='reset'>
          <button
            className='btn-secondary'
            type='button'
            onClick={handlerResetOptions(
              activeQuiz.numberOfQinQuiz,
              activeQuiz.choosenTheme
            )}
          >
            Reset Choice
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
