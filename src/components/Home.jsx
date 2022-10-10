import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section>
      <div className="  bg-[url('https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/home05-sldier.jpg')]">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
            We Organize Effective Learning
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            We Organize Effective Learning
          </p>
          <div className="flex flex-wrap justify-center">

            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
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
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-gray-100 p-5 rounded-md">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 bg-gray-100 rounded-md" src="https://source.unsplash.com/200x200/?fashion?4" />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>




            {

            }
          </div>
        </div>
      </section>

    </section>
  );
};

export default Home;
