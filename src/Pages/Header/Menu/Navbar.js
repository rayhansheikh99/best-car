import { PhoneIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigation = [
        { name: 'HOME', href: '/home' },
        { name: 'CARS', href: '/products' },
        { name: 'ABOUT', href: '/about' },
        { name: 'CONTACT', href: '/contact' },
        { name: 'DASHBOARD', href: '/dashboard' },
        
      ]
    return (
    <div className="bg-indigo-600">
        <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-1 w-0">
              <span className="flex p-2 bg-indigo-800 rounded-lg">
                <PhoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="inline">+880123688888</span>
              </p>
              <div className='mx-6'>
              {navigation.map((item) => (
                    <Link as={Link}  key={item.name} to={item.href} className="py-2 mx-2 font-medium text-white hover:border-b-2 hover:text-gray-300">
                      {item.name}
                    </Link>
                  ))}
                </div>
            </div>
            <span className="flex p-2 mr-10 bg-indigo-800 rounded-lg">
                <ShoppingCartIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
            <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            
              <Link as={Link} to="/login"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-100"
              >
                Login
              </Link>
            </div>
            
          </div>
        </div>
            
        </div>
    );
};

export default Navbar;