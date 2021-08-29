import AnswerObject from './reducer'
import TOTAL_QUESTIONS from '../App'

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

const startTrivia = (amount: number, difficulty: Difficulty) => {
    return function async (dispatch){
        const API_URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        try{
            const response = await fetch(API_URL, {method: 'get'});
            const data = await response.json();
            dispatch({type: 'START_TRIVIA', payload: data.results.map((question: Question) => (
                {
                    ...question,
                    answers: shuffleArray([...incorrect_answers, correct_answer])
                }
            ))})
        }catch(err){
            console.log(err);
        }
    }
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>, gameOver: boolean, answerObject: AnswerObject) => {
    return function(dispatch){
        if(!gameOver){
            const answer = e.currentTarget.value;
            // checking answer
            const correct = questions[number].correct_answer === answer;
            //if answer is correct then increase score for one
            if(correct){
                dispatch({type: 'INCREASE_SCORE'})
            }
            dispatch({type: 'SAVE_USER_ANSWER', payload: {answerObject: answerObject}})
        }
    }
}

const nextQuestion = (number: boolean) => {
    // move on to the next question if not the last question
    const nextNumb = number + 1;
    nextNumb ===  TOTAL_QUESTIONS ? dispatch({type: 'COMPLETE_THE_QUIZ'}) : dispatch({type: 'NEXT_QUESTION'})
}

export const QuizActions = startTrivia | checkAnswer | nextQuestion;