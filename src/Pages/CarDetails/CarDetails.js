import React from 'react';
import Navbar from '../Header/Menu/Navbar';

const CarDetails = () => {
    return (
        <div>
            <Navbar/>
            
<div className='grid grid-cols-2 m-28'>
<img class="ml-28 object-cover w-full h-full rounded-t-lg md:h-full md:w-96 md:rounded-none md:rounded-l-lg" src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=" alt=""/>
<div class="flex flex-col">
<h5 class=" text-2xl mb-6 font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
<span className="font-serif text-3xl font-bold text-gray-900 dark:text-white">$ 20000</span>
<button className='py-1 mt-6 font-serif font-semibold text-white bg-blue-500 rounded mx-36 hover:bg-orange-400'>Check Out</button>

</div>
</div>


        </div>
    );
};

export default CarDetails;