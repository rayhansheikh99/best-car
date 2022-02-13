import React from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';

const Payment = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-2'>
                <div  className=''>
                    <Dashboardall/>
                </div>
                <div>
                    <h1>Payment coming soon</h1>
                </div>
            </div>
        </div>
    );
};

export default Payment;