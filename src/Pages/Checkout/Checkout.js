import Navbar from '../Header/Menu/Navbar';
import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import axios from "axios";

const Checkout = () => {
    const [product, setProduct] = useState([])
    const [productDetails, setProductDetails] = useState({})
    const [orderData, setOrderData] = useState({});
    const {Id} = useParams();
    const date = new Date();
    const currentDate = date.toLocaleDateString();

    useEffect(()=>{
        fetch(`https://boiling-crag-65748.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const foundService = product.find(
            (products)=>products._id===Id);
            setProductDetails(foundService);
      
    },[product,Id]);
  
    //useform use here and POST Method Apply here
    // const { register, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const handelOrderField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        setOrderData(newOrderData);
        
      };

    const handleSubmit = e => {
        const data = {
            ...orderData,
            date: currentDate,
            price: productDetails?.price,
            status: "PENDING",
            name: user.displayName,
            email: user.email,
            productName: productDetails?.name,
            
          };
          console.log(data)
        axios
        .post('https://boiling-crag-65748.herokuapp.com/orders',data) 
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Order Complete Successfully",
                        icon: "success",
                        button: "Done",
                      });
                    
                }
            })
            e.preventDefault() 
       
    };
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <Navbar/>
            <h1 className="m-6 font-serif text-2xl font-bold text-center text-amber-600">Fill up your checkout details</h1>
            <form onSubmit={handleSubmit}>

                <input onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96"  defaultValue={user.displayName} />
                <input onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" defaultValue={user.email} />
                {/* {errors.email && <span className="error">This field is required</span>} */}
                <input onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" defaultValue={productDetails?.name} />
                <input  onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Address" defaultValue="" name='address' />
                <textarea  onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Message" name='message' />
                <input  onBlur={handelOrderField} className="block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Phone number" name='phone' />
                <button type="submit" className='block w-48 p-2 mx-auto mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400'>CONFIRM ORDER</button>
            </form>
        </div>
    );
};

export default Checkout;