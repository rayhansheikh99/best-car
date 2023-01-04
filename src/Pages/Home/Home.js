import React, { useEffect, useState } from 'react';
import Menu from '../Header/Menu/Menu';
import Review from '../Header/Review/Review';
import Topbanner from '../Header/Topbanner';
import Products from '../Products/Products';


const Home = () => {

    const [products, setProducts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://best-car-server.onrender.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data.slice(0,6)))

    },[])

    return (
        <div>
            <Topbanner/>
            <Menu/>
            <h1 className='my-8 font-mono text-2xl font-bold text-center'>Our Feature Cars</h1>
            <div className='grid justify-center gap-6 mx-16 mb-6 lg:grid-cols-3'>
            {
              products.map(product=> <Products key={product._id} product={product}/>)
            }
            </div>

            <Review/>
        </div>
    );
};

export default Home;