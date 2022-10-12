import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic
    return (
        <article className="flex flex-col bg-gray-100 p-5 rounded-md">
            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 bg-gray-100 rounded-md" src={logo} />
            </Link>
            <div className="flex flex-col flex-1 p-6">
                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>

                <Link rel="noopener noreferrer" href="#" className="text-lg  tracking-wider uppercase hover:underline text-violet-400">{name}</Link>

                <div className="flex flex-wrap justify-center items-center justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <Link to={`/quiz/${id}`}>
                        <button className='flex justify-center items-center gap-2 text-xl bg-blue-500 text-white py-1 px-3 rounded-lg '>Start Quiz <ArrowRightIcon className="h-3 w-3 text-white"></ArrowRightIcon></button>
                    </Link>

                    <span>2.4K views</span>
                </div>
            </div>
        </article>
    );
};

export default Topic;