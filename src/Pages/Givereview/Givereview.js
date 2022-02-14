import React from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';
import useAuth from './../../Hooks/useAuth';
import { useForm } from 'react-hook-form';


const Givereview = () => {

    const {user} = useAuth();
    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully');
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
                <div data-aos="zoom-in" className=''>
                <h4 className='mb-8 text-2xl'>Give Your Review</h4>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
        
                <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" defaultValue={user.displayName} {...register("name",{ required: true })} />
                {/* <input placeholder="Give Rating(0-5)" defaultValue="" {...register("rating", { required: true })} /> */}
                <input className="block p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Write Your comment" defaultValue="" {...register("review",{ required: true })} />
                <button type="submit" className='block w-48 p-2 mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400'>Submit</button>
            </form>
                </div>
            </div>
        </div>
    );
};

export default Givereview;