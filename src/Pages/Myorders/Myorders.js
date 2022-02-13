import React from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';


const Myorders = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-2'>
                <div  className=''>
                    <Dashboardall/>
                </div>
                <div>
                    <h1>My orders list</h1>
                </div>
            </div>
        </div>
    );
};

export default Myorders;