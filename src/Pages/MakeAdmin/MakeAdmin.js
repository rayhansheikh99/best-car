import React,{useEffect, useState} from 'react';
import Navbar from './../Header/Menu/Navbar';
import Dashboardall from './../Dashboardall';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { reset } = useForm();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = data => {
        const user = { email };
        fetch('https://boiling-crag-65748.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
        
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                    alert('Admin Added Successfully');
                    reset();
            })
            // .then(data => {
                
                
            // })

       
    }

    return (
        <div>
            <Navbar/>
            <div className='flex flex-row'>
                <div  className='basis-1/4'>
                    <Dashboardall/>
                </div>
                <div className='basis-3/4' data-aos="zoom-out">
                <h4 className='text-center mb-5 bg-slate-600 py-3 text-white text-3xl'>Make an Admin</h4>
                    <form  onSubmit={handleAdminSubmit}>
                    <input onBlur={handleOnBlur} className=' block mx-auto p-2 mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96' type="email" placeholder="Enter email">
                    </input>
                    <button className='block mx-auto w-48 p-2 mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400' type="submit">Make Admin</button>
                    </form>
                </div>
        </div>
        </div>
    );
};

export default MakeAdmin;