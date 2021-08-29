import { QuestionsState, Question, Difficulty } from '../someTypes'

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

export const startTrivia =  (amount: number, difficulty: Difficulty) => {
    return  async function (dispatch: any){
        dispatch({type: 'MAKE_REQUEST'});
        const API_URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        try{
            const response = await fetch(API_URL, {method: 'get'});
            const data = await response.json();

            dispatch({type: 'START_TRIVIA', payload: data.results.map((question: Question) => (
                {
                    ...question,
                    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                }
            ))})
        }catch(err){
            console.log(err);
        }
    }
}

export const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>, gameOver: boolean, number: number, questions: QuestionsState[]) => {
    return function(dispatch: any){
        if(!gameOver){
            const answer = e.currentTarget.value;
            // checking answer
            const correct = questions[number].correct_answer === answer;
            //if answer is correct then increase score for one
            if(correct){
                dispatch({type: 'INCREASE_SCORE'})
            }
            dispatch({
                type: 'SAVE_USER_ANSWER', 
                payload: { 
                    answerObject: {
                        question: questions[number].question, 
                        answer: answer, 
                        correct: correct, 
                        correctAnswer: questions[number].correct_answer
                        }
                    }
                })
        }
    }
}

export const nextQuestion = (number: number) => {
    return function(dispatch: any){
        // move on to the next question if not the last question
        const nextNumb = number + 1 ;
        const TOTAL_QUESTIONS = 10;

        if(nextNumb === TOTAL_QUESTIONS){
            dispatch({type: 'COMPLETE_THE_QUIZ'})
        }else{
            dispatch({type: 'NEXT_QUESTION', payload: nextNumb})
        }   
    }
}
