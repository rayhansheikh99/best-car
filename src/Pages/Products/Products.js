import React from 'react';
import { Link } from 'react-router-dom';


const Products = (props) => {

    const{_id, name, image, price}=props.product

    return (
        <div className=''>            
                <div data-aos="zoom-in" className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="pb-8 rounded-lg h-80" src={image} alt="product"/>
                <div className="px-5 pb-5">
                <Link as={Link} to="#">
                <h3 className="mb-4 font-serif text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                <Link as={Link} to={`/cardetails/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono">SEE DETAILS</Link>
                </div>
                </div>
                </div>

            
        </div>
    );
};

export default Products;