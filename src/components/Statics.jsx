import React, { useContext } from 'react';
import { Line, LineChart } from 'recharts';
import { QuizContext } from '../Main';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
    const topics = useContext(QuizContext);
    console.log(topics)
    return (
        <div>
            <h1 className='text-2xl text-blue-600 text-center font-bold my-5'>Chart Useing Total of Course </h1>


            <ResponsiveContainer width="95%" height={400} >
                <LineChart
                    width={800}
                    height={400}
                    data={topics}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />

                </LineChart>



            </ResponsiveContainer>


        </div>
    );
};

export default Statics;