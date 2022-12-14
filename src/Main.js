import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

export const QuizContext = createContext([]);



const Main = () => {
    const topics = useLoaderData().data;
    // console.log(topics)

    return (
        <div>
            <QuizContext.Provider value={topics}>

                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>

            </QuizContext.Provider>
        </div>
    );
};

export default Main;