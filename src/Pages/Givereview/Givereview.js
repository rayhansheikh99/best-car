import React from 'react';
import Dashboardall from '../Dashboardall';
import Navbar from '../Header/Menu/Navbar';
import useAuth from './../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const Givereview = () => {

    const {user} = useAuth();
    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-crag-65748.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Review Successfully Added",
                        icon: "success",
                        button: "Done",
                      });
                    reset();
                }
            })
    };

    return (
        <div className='h-screen'>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div data-aos="zoom-in" className='basis-3/4 '>
                <h4 className='text-center mb-5 bg-slate-600 py-3 text-white text-3xl'>Give Your Review</h4>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
        
                <input className="block mx-auto p-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" defaultValue={user.displayName} {...register("name",{ required: true })} />
                {/* <input placeholder="Give Rating(0-5)" defaultValue="" {...register("rating", { required: true })} /> */}
                <textarea className="block mx-auto p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96" placeholder="Write Your comment" defaultValue="" {...register("review",{ required: true })} />
                <button type="submit" className='block mx-auto w-48 p-2 mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400'>Submit</button>
            </form>
                </div>
            </div>
        </div>
    );
};

export default Givereview;