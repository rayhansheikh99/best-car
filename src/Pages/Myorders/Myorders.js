import React, {useState, useEffect } from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';
import useAuth from './../../Hooks/useAuth';


const MyOrders = () => {
    const {user} = useAuth();
    console.log(user.email)
    
    const [orders, setOrders]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        console.log(orders.name)


    },)

           //delete an order and DELETE Method Apply Here
           const handleDeleteOrder = id =>{
            const proceed = window.confirm("Are you want to delete?")
            if(proceed){
                const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingOrders = orders.filter(order => order._id!==id);
                    setOrders(remainingOrders);
                    
                }
            })
     
        }
            }
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-2'>
                <div  className=''>
                    <Dashboardall/>
                </div>
                <div data-aos="zoom-in">
                <div className=''><h2 className='text-xl'>My Order List</h2></div>
        <div className=''>
        <div className='grid justify-center gap-6 mt-6 mb-6 mr-16 text-center lg:grid-cols-1'>
        
                {
                   
                        orders.map(order => 
                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"  key={order._id}>
                               
                               <div className="list-group-flush ">
                                <p className='' >Product: {order.productName}</p>
                                <p>E-mail: {order.email}</p>
                                <p>Phone: {order.phone}</p>
                            </div>
                            <div>
                            <button onClick={()=>handleDeleteOrder(order._id)} className='inline p-2 mt-2 bg-red-500 rounded text-white hover:bg-black'>DELETE</button>
                            {/* <Button className='px-2 py-2 me-2'>{order.status}</Button> */}
                            </div>
                        </div>
                        
                        )
                        
                }
                    
                
               
         </div>
         </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;