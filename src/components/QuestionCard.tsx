import React from 'react';
//Types
import { AnswerObject, QuestionsState } from '../someTypes'
//Styles
import { Wrapper, ButtonWrapper} from './QuestionCard.styles'
//An action creator
import { checkAnswer } from '../redux/actions'

interface Props {
    question: string;
    answers: string[];
    dispatch: any;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    gameOver: boolean,
    questions: QuestionsState[],
    number: number

}
const QuestionCard: React.FC<Props> = ({
    question,
    answers, 
    dispatch,
    userAnswer,
    questionNr, 
    totalQuestions,
    gameOver,
    questions,
    number
}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        <div>
            {answers.map(answer =>(
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                    >
                    <button 
                        disabled={userAnswer ? true : false} 
                        value = {answer} 
                        onClick = {e => dispatch(checkAnswer(e, gameOver, number, questions))}
                    >
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard