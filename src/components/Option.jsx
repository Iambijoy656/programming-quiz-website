import React from 'react';

import { useId } from 'react';


const Option = ({ option, questionObj, handleAnswer }) => {

    return (
        <button onClick={() => handleAnswer(questionObj, option)}>
            <div className='border border-blue-400 bg-sky-200 p-5 my-1 mt-4 rounded-lg text-zinc-700 hover:bg-blue-300'>
                {option}

            </div>

        </button>

    );
};

export default Option;