import { QuestionsState, AnswerObject } from '../someTypes'

export type QuizState = {
    loading: boolean;
    questions: QuestionsState[];
    number: number;
    userAnswers: AnswerObject[];
    score: number;
    gameOver: boolean;
}

export const reducer = ( 
    state: QuizState = { loading: false, questions: [], number: 0, userAnswers: [], score: 0, gameOver: true}, 
    action: any): QuizState => {
        switch(action.type){
            case 'START_TRIVIA':
                return{
                    loading: false,
                    questions: action.payload,
                    gameOver: false,
                    userAnswers: [],
                    score: 0,
                    number: 0
                }
            case 'MAKE_REQUEST':
                return{
                    ...state,
                    loading: true
                }
            case 'SAVE_USER_ANSWER':
                return{
                    ...state,
                    userAnswers: state.userAnswers.concat(action.payload.answerObject)
                }
            case 'NEXT_QUESTION':
                return{
                    ...state,
                    number: action.payload
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


