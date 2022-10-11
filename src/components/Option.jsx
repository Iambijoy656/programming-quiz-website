import React from 'react';

import { useId } from 'react';


const Option = ({ option, questionObj, handleAnswer }) => {
    const id = useId()
    // console.log(option)
    return (


        <button onClick={() => handleAnswer(questionObj, option)}>
            <div className='border border-blue-400 p-5 my-1 mt-4 rounded-lg text-zinc-700 hover:bg-blue-100'>
                {option}

            </div>

        </button>




    );
};

export default Option;