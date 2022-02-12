import React from 'react';
import Navbar from '../Header/Menu/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <Navbar/>
          <div className='grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2'>
          <div class="mt-10 mb-48 mx-10">
            <div class="mb-3">
            <label for="name" class="form-label inline-block mb-2 text-gray-700"
            >Full Name </label
            >
            <input
            type="name"
            class="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"placeholder="Enter full name"/>
         </div>
            <div class="mb-3">
            <label for="" class="form-label inline-block mb-2 text-gray-700"
            >Email </label
            >
            <input
            type="email"
            class="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div class="mb-3">
            <label for="" class="form-label inline-block mb-2 text-gray-700"
            >Password </label
            >
            <input
            type="password"
            class="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/signup" className='mr-10 font-bold text-blue-600'>Create a New Account</Link>
         <Link as={Link} to="/signup"  className='mr-10 font-bold text-blue-600'>Login with Google</Link><br/>
         <button className='px-6 py-2 mt-6 text-white bg-blue-600 rounded'>LOGIN</button>
        </div>
         
         <div>
            <img className='absolute invisible lg:visible lg:relative' src="https://media.istockphoto.com/photos/programming-and-password-concept-picture-id1183143306?b=1&k=20&m=1183143306&s=612x612&w=0&h=CBjts1K6IF77bmI26RFIoh2n4XHgmtAx4w2vhSSW79I=" alt=""/>
         </div>
        </div>
            
        </div>
    );
};

export default Login;