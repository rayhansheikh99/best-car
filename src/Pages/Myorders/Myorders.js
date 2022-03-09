import React, {useState, useEffect } from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';
import useAuth from './../../Hooks/useAuth';
import swal from 'sweetalert';


const MyOrders = () => {
    const {user} = useAuth();
    console.log(user.email)
    
    const [orders, setOrders]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`https://boiling-crag-65748.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        console.log(orders.name)


    },)

           //delete an order and DELETE Method Apply Here
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
                <div className=''><h2 className='py-3 mb-5 text-3xl font-bold text-center text-white bg-slate-600'>My Order List</h2></div>
        {orders.length ? (<div className=''>
                         <div className='grid grid-cols-1 gap-6 mx-auto mt-6 mb-6 lg:grid-cols-2'>
        
                {
                   
                        orders.map(order => 
                            <div className="block max-w-sm p-6 font-serif font-bold bg-gray-400 border border-gray-200 rounded-lg shadow-md text-dark hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"  key={order._id}>
                               
                               <div className="">
                                <p className='mb-2' ><span className='p-1 text-white bg-red-800 rounded-sm'>Product:</span> {order.productName}</p>
                                <p className='mb-2'><span className='p-1 text-white bg-red-800 rounded-sm'>E-mail:</span> {order.email}</p>
                                <p><span className='p-1 text-white bg-red-800 rounded-sm'>Date:</span> {order.date}</p>
                            </div>
                            <div className='flex'>
                            <button onClick={()=>handleDeleteOrder(order._id)} className='block p-2 mx-auto mt-2 text-white bg-red-500 rounded hover:bg-black'>DELETE</button>
                            <button className='block p-2 mx-auto mt-2 text-white bg-green-500 rounded hover:bg-black'>{order.status}</button>
                            </div>
                        </div>
                        
                        )
                        
                }
                    
                
               
         </div>
         </div>): (
        <h1 className='text-xl font-bold text-center text-red-500'>You have 0 Orders</h1>
      )}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;