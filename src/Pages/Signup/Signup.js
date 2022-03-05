import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Navbar from '../Header/Menu/Navbar';
import { useHistory } from 'react-router';

const Signup = () => {
    //sign up system apply here
  const {signInWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange} = useFirebase();
  
  const history = useHistory();
  let location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
    return (
        <div>
            <Navbar/>
            <form onSubmit={handleRegistration}>
            <div data-aos="zoom-in" className='grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2'>
          <div className="mx-10 mt-10 mb-48">
          <div className="mb-3">
            <label for="name" className="inline-block mb-2 text-gray-700 form-label"
            >Full Name </label
            >
            <input
            type="name" onBlur={handleNameChange}
            className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"placeholder="Enter full name"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Email </label
            >
            <input
            type="email" onBlur={handleEmailChange}
            className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Password </label
            >
            <input
            type="password" onBlur={handlePasswordChange}
            className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/login" className='mr-10 font-bold text-blue-600 hover:text-orange-500'>Already Have a Account</Link>
         <p onClick={handleGoogleSignIn} className='inline mr-10 font-bold text-blue-600 cursor-pointer hover:text-orange-500'>Login with Google</p><br/>
         <button type='submit' className='px-6 py-2 mt-6 text-white bg-blue-600 rounded hover:bg-orange-500'>SIGN UP</button>
        </div>
         
         <div>
            <img className='absolute invisible lg:visible lg:relative' src="https://optinmonster.com/wp-content/uploads/2016/01/High-Converting-Places-to-Add-Email-Signup-Forms.png" alt=""/>
         </div>
        </div>
        </form>
        </div>
    );
};

export default Signup;