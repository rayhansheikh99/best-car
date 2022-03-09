import React from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';

const Payment = () => {
    return (
        <div className='h-screen'>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div className='basis-3/4'>
                    <h1 className='text-center mb-5 bg-slate-600 py-3 text-white text-3xl'>Payment coming soon</h1>
                </div>
            </div>
        </div>
    );
};

export default Payment;