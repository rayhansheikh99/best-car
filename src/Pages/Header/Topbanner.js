import React from 'react';
import { PhoneIcon, ShoppingCartIcon, SpeakerphoneIcon, UserIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Topbanner = () => {
  const {user, logOut} = useAuth();
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="bg-indigo-600">
        <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-1 w-0">
              <span className="flex p-2 bg-indigo-800 rounded-lg">
                <SpeakerphoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">Big news! We're excited to announce a brand new car.</span>
              </p>
            </div>
            <div className="flex items-center flex-1 w-0">
              <span className="flex p-2 bg-indigo-800 rounded-lg">
                <PhoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-2 font-medium text-white truncate">
                <span className="inline">+880123688888</span>
              </p>
            </div>
            <span className="flex p-2 mr-24 bg-indigo-800 rounded-lg">
                <ShoppingCartIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
            <div className="flex ">
         
      {user?.email?
       <Link onClick={logOut} as={Link} to="/login" className='inline px-2 py-2 mt-1 mr-5 font-serif font-semibold text-center text-white bg-red-500 rounded hover:bg-blue-100 hover:text-orange-500'>Logout</Link>:
      <Link as={Link} to="/login" className='p-2 font-bold text-center bg-white rounded hover:bg-gray-400 text-black-600'>Login</Link>}
      {user?.email?
      <p className='flex p-2 mt-2 font-mono font-semibold text-red-100'>
        <UserIcon className='w-8 h-6 text-white'/>{user?.displayName}
      </p>: ('')}
            </div>
            
          </div>
        </div>
      </div>
    )
};

export default Topbanner;