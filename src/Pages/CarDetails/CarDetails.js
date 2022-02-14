import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navbar from '../Header/Menu/Navbar';
import { Link } from 'react-router-dom';

const CarDetails = () => {

    const [product, setProduct] = useState([])
    const [productDetails, setProductDetails] = useState({})
    const {Id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const foundService = product.find(
            (products)=>products._id===Id);
        setProductDetails(foundService);
      
    },[product,Id]);
  
    
    return (
        <div>
            <Navbar/>
            
<div className='grid grid-cols-2 m-28'>
<img className="object-cover w-full rounded-t-lg h-96 md:h-80 md:w-full md:rounded-none md:rounded-l-lg" src={productDetails?.image} alt=""/>
<div className="flex flex-col ml-10">
<h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productDetails?.name}</h5>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDetails?.describe}</p>
<span className="font-serif text-3xl font-bold text-gray-900 dark:text-white">{productDetails?.price}</span>
<Link as={Link} to={`/checkout/${productDetails?._id}`}><button className='px-8 py-1 mt-6 font-serif font-semibold text-white bg-blue-500 rounded mx-36 hover:bg-orange-400'>Check Out</button></Link>

</div>
</div>


        </div>
    );
};

export default CarDetails;