import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'

const Quiz = ({ questionObj }) => {
    console.log(questionObj)
    const { question, options, correctAnswer } = questionObj
    // console.log(question)
    const [answer, setAnswer] = useState([]);

    const handleAnswer = (option) => {
        // console.log(option)
        if (option === correctAnswer) {
            toast.success('Correct Answer!', { autoClose: 500 })
        } else {
            toast.error('Wrong Answer!', { autoClose: 500 })
        }

    }



    return (
        <div>
            <div className="bg-white text-gray-100 rounded-lg shadow-lg my-4">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400"> 1 </span>
                        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded"><EyeIcon className="h-6 w-6 text-blue-500"></EyeIcon></Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline text-blue-500">{question}</Link>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {
                                options.map((option, id) => <Option
                                    key={id}
                                    option={option}
                                    questionObj={questionObj}
                                    handleAnswer={handleAnswer}
                                ></Option>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quiz;