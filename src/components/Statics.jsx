import React, { useContext } from 'react';
import { QuizContext } from '../Main';

const Statics = () => {
    const topics = useContext(QuizContext);
    console.log(topics)
    return (
        <div>
            <h1 className='text-2xl text-blue-600 text-center font-bold'>Chart Useing Total of Course </h1>
        </div>
    );
};

export default Statics;