import { QuestionsState } from '../API'
import { QuizActions } from './actions'

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

type InitialState = {
    loading: boolean;
    questions: QuestionsState[];
    number: number;
    userAnswers: AnswerObject[];
    score: number;
    gameOver: boolean;
}

export const reducer = (
    state: InitialState = {loading: true, questions: [], number: 0, userAnswers: [], score: 0, gameOver: true},
    action: QuizActions
    ): InitialState => {
        switch(action.type){
            case 'START_TRIVIA':
                return{
                    ...state,
                    loading: false,
                    questions: action.payload,
                    gameOver: false
                }
            case 'SAVE_USER_ANSWER':
                return{
                    ...state,
                    userAnswers: state.userAnswers.concat(action.payload.answerObject)
                }
            case 'NEXT_QUESTIONS':
                return{
                    ...state,
                    number: state.number + 1
                }
            case 'INCREASE_SCORE':
                return{
                    ...state,
                    score: state.score + 1
                }
            case 'COMPLETE_THE_QUIZ':
                return{
                    ...state,
                    gameOver: true
                }
            default:
                return state;
        }

}


