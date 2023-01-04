import React, {useState, useEffect} from 'react';
import Navbar from './../Header/Menu/Navbar';
import Dashboardall from './../Dashboardall';
import swal from 'sweetalert';

const ManageProducts = () => {

    const [products, setProducts]=useState([])
   
    // data fetch 
    useEffect(()=>{
        fetch('https://best-car-server.onrender.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    },[])

    const handleDeleteProduct = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://best-car-server.onrender.com/products/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal({
                    title: "Good job!",
                    text: "Item Delete Successfully",
                    icon: "success",
                    button: "Done",
                  });
                const remainingProducts = products.filter(product => product._id!==id);
                setProducts(remainingProducts);
                
            }
        })
 
    }
        }

    return (
        <div>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div className='basis-3/4'>
                <h4 data-aos="zoom-out" className='text-center mb-5 bg-slate-600 py-3 text-white text-xl lg:text-3xl'>PRODUCT MANAGEMENT</h4>
                    <div className='mt-5'>
                    <div><h4 data-aos="zoom-out" className='text-center text-3xl my-6'>OUR CARS</h4></div>
                        <div className="grid justify-center gap-6 mx-16 mb-6 lg:grid-cols-3">
                        
                        {
                        products.map(product=>
                        <div key={product._id}> 
                       
                       <div data-aos="zoom-in" className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img className="pb-8 rounded-lg h-80" src={product.image} alt="product"/>
                            <div className="px-5 pb-5">
                            
                            <h3 className="mb-4 font-serif text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h3>
                            
                            <div className="flex items-center justify-between">
                            <span className="font-serif text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                            <button onClick={()=>handleDeleteProduct(product._id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono">DELETE</button>
                            </div>
                            </div>
                            </div>
                            
                     </div>)
                        }
                       
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ManageProducts;