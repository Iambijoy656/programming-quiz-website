import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ questionObj }) => {
    console.log(questionObj)
    const { question, options } = questionObj

    return (
        <div>
            <div className="bg-white text-gray-100 rounded-lg shadow-lg my-4">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400"> 1 </span>
                        <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">Eye icon</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline text-blue-500">{question}</Link>
                        <p className="mt-2 text-blue-500">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Read more</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;