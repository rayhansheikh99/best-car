import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Header/Menu/Navbar';

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <div data-aos="zoom-in" className='grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2'>
          <div className="mx-10 mt-10 mb-48">
          
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Email </label
            >
            <input
            type="email"
            className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Password </label
            >
            <input
            type="password"
            className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/login" className='mr-10 font-bold text-blue-600'>Already Have a Account</Link>
         <Link as={Link} to="/signup"  className='mr-10 font-bold text-blue-600'>Login with Google</Link><br/>
         <button className='px-6 py-2 mt-6 text-white bg-blue-600 rounded'>SIGN UP</button>
        </div>
         
         <div>
            <img className='absolute invisible lg:visible lg:relative' src="https://optinmonster.com/wp-content/uploads/2016/01/High-Converting-Places-to-Add-Email-Signup-Forms.png" alt=""/>
         </div>
        </div>
        </div>
    );
};

export default Signup;