import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizPage = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData)
    const { name, questions, id } = quizData





    return (
        <div>
            <h3 className='text-2xl text-center font-bold my-4 text-blue-800 '>Quiz of {name}</h3>
            {
                questions.map(questionObj => <Quiz
                    key={questionObj.id}
                    questionObj={questionObj}


                >

                </Quiz>)
            }

        </div>
    );
};

export default QuizPage;