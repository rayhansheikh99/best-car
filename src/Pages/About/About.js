import React from 'react';
import Navbar from '../Header/Menu/Navbar';
import './about.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className=''>
             <img className='w-full img-h' src="https://robbreport.com/wp-content/uploads/2021/01/AVTR-opener.jpg?w=1000" alt=""/>
            <div className='absolute bg-text top-20 mt-2 lg:mt-3 lg:top-96 border-t-2 border-orange-600 p-6'>
            <h1 className='font-serif font-semibold text-orange-300 lg:text-4xl'>About Us</h1>
            <p className='text-sm text-white font-serif mx-10 mt-2'>Best car is a online car selling website. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem sed fuga debitis dicta porro, reprehenderit tempora rerum, commodi veritatis maiores rem molestias mollitia libero eligendi voluptate nulla, nam qui.</p>
            </div>
        </div>
        </div>
    );
};

export default About;