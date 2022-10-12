import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizPage = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData)
    const { name, questions, id } = quizData
    // console.log(questions)
    const [correctAns, setCorrectAns] = useState(0)
    const [wrongAns, setWrongAns] = useState(0)



    return (
        <div>
            <h3 className='text-2xl text-center font-bold my-4 text-blue-800'>Quiz of {name}</h3>
            <h5 className='text-2xl text-center font-bold my-4 text-blue-500'> Correct Answer: {correctAns}  </h5>
            <h5 className='text-xl text-center  my-4 text-blue-500'> <span>Right: {correctAns} </span>  <span> Wrong: {wrongAns}</span></h5>

            {
                questions.map(questionObj => <Quiz
                    key={questionObj.id}
                    questionObj={questionObj}
                    questions={questions}
                    correctAns={correctAns}
                    setCorrectAns={setCorrectAns}
                    wrongAns={wrongAns}
                    setWrongAns={setWrongAns}



                >

                </Quiz>)
            }

        </div>
    );
};

export default QuizPage;