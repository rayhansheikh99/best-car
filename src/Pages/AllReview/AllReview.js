import React from 'react';

const AllReview = (props) => {
    const {name, review}=props.review
    return (
        <div className="block max-w-sm p-6 bg-slate-400 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400"><q>{review}</q></p>

            </div>

        
    );
};

export default AllReview;