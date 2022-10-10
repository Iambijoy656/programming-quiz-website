import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizPage = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)

    const { name, questions
    } = quizData

    return (
        <div>
            <h3 className='text-2xl text-center font-semibold my-4 text-blue-800'>Quiz of {name}</h3>
            {
                questions.map(question => <Quiz></Quiz>)
            }

        </div>
    );
};

export default QuizPage;