import { QuestionsState } from '../API'

const AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const InitialState = {
    loading: boolean,
    questions: QuestionsState,
    

}

export function reducer()

