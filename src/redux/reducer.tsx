import { QuestionsState } from '../API'

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

type InitialState = {
    loading: boolean;
    questions: QuestionsState[];
    number: number;
    userAnswer: AnswerObject;
    score: number;
    gameOver: boolean;
}

export const reducer = (
    state: InitialState = {loading: true, questions: [], number: 0, userAnswer: [], score: 0, gameOver: false},
    action: QuizActions
    ): InitialState => {
        switch(action.type){
            case 'START_TRIVIA':
                return{

                }
            case 'CHECK_ANSWER':
                return{

                }
            case 'NEXT_QUESTIONS':
                return{

                }
            default:
                return state;
        }

}


