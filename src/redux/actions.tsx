
export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

type Question ={
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

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    return function(dispatch){
        
    }
}