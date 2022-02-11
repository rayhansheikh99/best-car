import React from 'react';
import { PhoneIcon, ShoppingCartIcon, SpeakerphoneIcon } from '@heroicons/react/outline'

const Topbanner = () => {
    return (
        <div className="bg-indigo-600">
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
              <p className="ml-3 font-medium text-white truncate">
                <span className="inline">+880123688888</span>
              </p>
            </div>
            <span className="flex p-2 mr-10 bg-indigo-800 rounded-lg">
                <ShoppingCartIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
            <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            
              <a
                href="/login"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
              >
                Login
              </a>
            </div>
            
          </div>
        </div>
      </div>
    )
};

export default Topbanner;