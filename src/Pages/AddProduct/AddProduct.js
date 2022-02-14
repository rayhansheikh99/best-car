import React from 'react';
import Navbar from './../Header/Menu/Navbar';
import Dashboardall from './../Dashboardall';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Item Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-2'>
                <div  className=''>
                    <Dashboardall/>
                </div>
                <div data-aos="zoom-out">
                <h4 className='text-xl'>Add Product From Here</h4>
              <form  className="" onSubmit={handleSubmit(onSubmit)}>
          
                  <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96"  placeholder="Product Name" defaultValue="" {...register("name",{ required: true })} />
                  <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96"  placeholder="Price" defaultValue="" {...register("price", { required: true })} />
                  <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Description" defaultValue="" {...register("describe",{ required: true })} />
                  <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Image Link" defaultValue="" {...register("image",{ required: true })} />
                  <button type="submit" className='block w-48 p-2 mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400'>Add Item</button>
              </form>
                </div>
        </div>
        </div>
    );
};

export default AddProduct;