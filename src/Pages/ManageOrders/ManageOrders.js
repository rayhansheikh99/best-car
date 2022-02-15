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
        <div>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div className='basis-3/4' data-aos="zoom-in">
                <div className='text-center mb-5 bg-slate-600 py-3 text-white text-3xl'><h2 className=''>Manage All Order</h2></div>
            <div className='grid justify-center gap-6 mt-6 mb-6 mr-16 lg:grid-cols-1'>
            
             <ul>
                {
                    //showing data here
                    orders.map(order => <div data-aos="zoom-in" className="block max-w-sm p-6 bg-gray-400 text-dark font-serif font-bold border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        key={order._id}>
                        <div className="">
                        <p className='' >Product: {order.productName}</p>
                        <p>E-mail: {order.email}</p>
                        <p>Phone: {order.phone}</p>
                    </div>
                    <div className=''>
                    <button onClick={()=>handleDeleteOrder(order._id)} className='block mx-auto p-2 mt-2 bg-red-500 rounded text-white hover:bg-black'>DELETE</button>
                    {/* <Button className='px-2 py-2 me-2'>{order.status}</Button> */}
                    </div>
                    </div>)
                }
            </ul>
        </div>
                </div>
        </div>
        </div>
    );
};

export default ManageOrders;