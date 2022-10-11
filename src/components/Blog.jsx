import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800 text-gray-100 lg:w-[1100px] rounded-md my-5 ">
            <div className="container  flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl my-5">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">what is the purpose of react router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does Context Api works?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">TThe React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">UseRef Hook in react</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">What is useRef hook in React?
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    </details>
                </div>

            </div>
        </section>
    );
};

export default Blog;