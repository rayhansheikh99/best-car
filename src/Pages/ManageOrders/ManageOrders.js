import React,{useEffect, useState} from 'react';
import Navbar from './../Header/Menu/Navbar';
import Dashboardall from './../Dashboardall';
import swal from 'sweetalert';


const ManageOrders = () => {
    const [orders, setOrders]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://boiling-crag-65748.herokuapp.com/allorder')
        .then(res=>res.json())
        .then(data=> setOrders(data))


    },[])

       //delete an order
       const handleDeleteOrder = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://boiling-crag-65748.herokuapp.com/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal({
                    title: "Good job!",
                    text: "Order Delete Successfully",
                    icon: "success",
                    button: "Done",
                  });                
                const remainingOrders = orders.filter(order => order._id!==id);
                setOrders(remainingOrders);
            }
        })
 
    }
        }

    return (
        <div className='h-screen'>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div className='basis-3/4'>
                <div className=''><h2 className='text-center mb-5 bg-slate-600 py-3 text-white text-3xl font-bold'>All Order List</h2></div>
        {orders.length ? (<div className=''>
                         <div className='grid gap-6 grid-cols-1 mt-6 mb-6 lg:grid-cols-2 mx-auto'>
        
                {
                   
                        orders.map(order => 
                            <div className="block max-w-sm p-6 bg-gray-400 text-dark font-serif font-bold border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"  key={order._id}>
                               
                               <div className="">
                                <p className='mb-2' ><span className='text-white p-1 rounded-sm bg-red-800'>Product:</span> {order.productName}</p>
                                <p className='mb-2'><span className='text-white p-1 rounded-sm bg-red-800'>E-mail:</span> {order.email}</p>
                                <p><span className='text-white p-1 rounded-sm bg-red-800'>Phone:</span> {order.phone}</p>
                            </div>
                            <div>
                            <button onClick={()=>handleDeleteOrder(order._id)} className='block mx-auto p-2 mt-2 bg-red-500 rounded text-white hover:bg-black'>DELETE</button>
                            {/* <Button className='px-2 py-2 me-2'>{order.status}</Button> */}
                            </div>
                        </div>
                        
                        )
                        
                }
                    
                
               
         </div>
         </div>): (
        <h1 className='text-center text-xl font-bold text-red-500'>You have 0 Orders</h1>
      )}
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;