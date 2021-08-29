import React from 'react';
//React Redux typed hooks
import { useAppDispatch, useAppSelector } from './redux/hooks'
//Components
import QuestionCard from './components/QuestionCard';
//Types
import { Difficulty } from './someTypes';
//Styles
import { GlobalStyle, Wrapper} from './App.styles'
//States from reducer.ts
import { QuizState } from './redux/reducer'
//An action creator that returns a function
import { startTrivia, nextQuestion } from './redux/actions'

export const TOTAL_QUESTIONS = 10;

function App() {

  const {loading, questions, number, userAnswers, score, gameOver} = useAppSelector((state: QuizState ) => ({
    loading: state.loading,
    questions: state.questions,
    number: state.number,
    userAnswers: state.userAnswers,
    score: state.score,
    gameOver: state.gameOver
    }));

  const dispatch =  useAppDispatch();

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={() => dispatch(startTrivia(TOTAL_QUESTIONS, Difficulty.EASY))}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Questions...</p> : null }
      {!loading && !gameOver && (
        <QuestionCard 
          questionNr={number + 1}
          totalQuestions = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          gameOver = {gameOver}
          questions = {questions}
          dispatch = {dispatch}
          number = {number}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={ () => dispatch(nextQuestion(number))}>
          Next Question
        </button>
      ) : null}
    </Wrapper>
    </>
  );
}

export default App;
