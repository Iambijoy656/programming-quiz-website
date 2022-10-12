import React from 'react';

import { useId } from 'react';


const Option = ({ option, questionObj, handleAnswer, check }) => {
    const id = useId()
    // console.log(option)
    return (


        <button onClick={() => handleAnswer(questionObj, option)}>

            <input type="radio" checked={check} />
            <div className={check ? 'border border-blue-400 bg-red-200 p-5 my-1 mt-4 rounded-lg text-zinc-700 hover:bg-blue-100' : 'border border-blue-400 bg-sky-200 p-5 my-1 mt-4 rounded-lg text-zinc-700 hover:bg-blue-100'}>
                {option}

            </div>

        </button>



    );
};

export default Option;