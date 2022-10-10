import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic
    return (
        <article className="flex flex-col bg-gray-100 p-5 rounded-md">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 bg-gray-100 rounded-md" src={logo} />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>

                <a rel="noopener noreferrer" href="#" className="text-lg  tracking-wider uppercase hover:underline text-violet-400">{name}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <button className='text-xl bg-blue-500 text-white py-1 px-3 rounded-lg '>Start Quiz</button>
                    <span>2.4K views</span>
                </div>
            </div>
        </article>
    );
};

export default Topic;