import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../Main";
import Topic from "./Topic";


const Home = () => {
  const topics = useContext(QuizContext);



  return (
    <section>
      <div className="  bg-[url('https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/home05-sldier.jpg')]">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-orange-400">
            We Organize Effective Learning
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
            We Organize Effective Learning
          </p>
          <div className="flex flex-wrap justify-center">

            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900 hover:bg-orange-300"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>


      <section className="py-6 sm:py-1 text-black">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Popular Courses: {topics.length}</h2>
            <p className="font-serif text-sm text-gray-400">Learn With Us!!</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

            {
              topics.map(topic => <Topic
                key={topic.id}
                topic={topic}

              ></Topic>)
            }


          </div>
        </div>
      </section>

    </section>
  );
};

export default Home;
