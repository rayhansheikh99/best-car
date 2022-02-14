import React, { useEffect, useState } from 'react';
import Navbar from '../Header/Menu/Navbar';
import Slider from '../Header/Slider/Slider';
import Products from '../Products/Products';

const Allcar = () => {

    const [products, setProducts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://boiling-crag-65748.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    },[])

    return (
        <div>
            <Navbar/>
            <Slider/>
            <h1 className='my-8 font-mono text-2xl font-bold text-center'>Our Feature Cars</h1>
            <div className='grid justify-center gap-6 mx-16 mb-6 lg:grid-cols-3'>
            {
              products.map(product=> <Products key={product._id} product={product}/>)
            }
            </div>
        </div>
    );
};

export default Allcar;