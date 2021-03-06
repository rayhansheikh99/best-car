import { UserCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';


const Navbar = () => {
    const {user, logOut} = useAuth();
    return (

<nav  className="px-2 pb-0 bg-white border-gray-200 rounded sm:px-4 dark:bg-gray-800">
<div className="container flex flex-wrap items-center justify-between mx-auto">
<Link as={Link} to="/home" className="flex">
<img className='h-24 w-28' src="https://logoeps.com/wp-content/uploads/2013/01/best-car-logo-vector.png" alt=""/>
</Link>
<button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
<span className="sr-only">Open main menu</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>
<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<Link as={Link} to="/home" className="block pt-2 pb-2 pl-3 pr-4 text-gray-700 hover:border-b-2 hover:border-b-blue-700 md:hover:text-blue-700 md:bg-transparent dark:text-white" aria-current="page">HOME</Link>
</li>
<li>
<Link as={Link} to="/products" className="block pt-2 pb-2 pl-3 pr-4 text-gray-700 hover:border-b-2 hover:border-b-blue-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CARS</Link>
</li>
<li>
{user.email && <Link as={Link} to="/dashboard" className='block pt-2 pb-2 pl-3 pr-4 text-gray-700 hover:border-b-2 hover:border-b-blue-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>DASHBOARD</Link>}
</li>
<li className="flex">
{user?.email?
       <Link onClick={logOut} as={Link} to="/login" className='inline px-2 py-2 mt-1 mr-5 text-center text-white bg-red-500 rounded'>LOGOUT</Link>:
      <Link as={Link} to="/login" className='p-2 font-bold text-center bg-blue-500 rounded hover:bg-gray-400 text-black-600'>LOGIN</Link>}
      {user?.email?
      <p className='flex mt-2'>
        <UserCircleIcon className='w-8 h-6'/>{user?.displayName}
      </p>: ('')}
</li>
</ul>
</div>
</div>
</nav>


    );
};

export default Navbar;