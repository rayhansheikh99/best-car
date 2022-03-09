import { ChartSquareBarIcon, ClipboardListIcon, FolderAddIcon, PlusCircleIcon, CurrencyDollarIcon, StarIcon, UserCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';


const Dashboardall = () => {
  const {admin} = useAuth();
    return (
        <div>
            
            <div className="w-40 h-full px-1 bg-white shadow-md md:w-60">
  <ul className="relative">
    <li className="relative">
      <Link as={Link} to="/dashboard" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <ChartSquareBarIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>DASHBOARD</span>
      </Link>
    </li>
    <li className="relative">
      <Link as={Link} to="/myorders" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <ClipboardListIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>MY ORDER LIST</span>
      </Link>
    </li>
   {admin && <li className="relative">
      <Link as={Link} to="/addproduct" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <PlusCircleIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>ADD PRODUCT</span>
      </Link>
    </li>}
    <li className="relative">
      <Link as={Link} to="/givereview" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <StarIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>GIVE REVIEW</span>
      </Link>
    </li>
    {admin && <li className="relative">
      <Link as={Link} to="/manageorders" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <ClipboardListIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>MANAGE ORDERS</span>
      </Link>
    </li>}
    {admin && <li className="relative">
      <Link as={Link} to="/makeadmin" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <UserCircleIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>MAKE ADMIN</span>
      </Link>
    </li>}
    {admin && <li className="relative">
      <Link as={Link} to="/manageproducts" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <FolderAddIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>MANAGE PRODUCTS</span>
      </Link>
    </li>}
    <li className="relative">
      <Link as={Link} to="/payment" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-blue-300" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <CurrencyDollarIcon className="w-6 h-6 mx-2" aria-hidden="true" />
        <span>PAYMENT</span>
      </Link>
    </li>
  </ul>
</div>

        </div>
    );
};

export default Dashboardall;