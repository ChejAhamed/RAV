
export type Question = {
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answer:String[],
    question:string,
    type:string
}
export type QuestionState=Question &{answers:string[]}
export enum Difficulty{
    EASY='EASY',
    MEDIUM='MEDIUM',
    HARD="HARD"
}

export const fetchQuizQuestions=async (amount:number, Difficulty:any)=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${Difficulty}&type=multiple`;
    const data = await (await (await fetch(endpoint)).json())
    return data.results.map((question:Question)=>(
        {...question,
            answer:
    }))
}