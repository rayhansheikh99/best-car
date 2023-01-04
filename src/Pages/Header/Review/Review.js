import React, {useEffect, useState} from 'react';
import AllReview from './../../AllReview/AllReview';


const Review = () => {

  const [reviews, setReviews]=useState([])
  // data fetch 
  useEffect(()=>{
      fetch('https://best-car-server.onrender.com/reviews')
      .then(res=>res.json())
      .then(data=> setReviews(data))

  },[])
    return (
        <div data-aos="zoom-in">
            <h5 className='mt-10 font-mono text-2xl font-bold text-center'>Customer Reviews</h5>
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl text-center mt-8">
        "Managing customer reviews is vital for modern businesses. Maximize the impact of what your customers are saying about our products"
      </p>
    <div className='grid justify-center gap-6 mx-16 mt-6 mb-6 text-center lg:grid-cols-3'>
    
            {
                reviews.map(review => <AllReview key={review._id} review={review}/>)
            }
  </div>
  

        </div>
    );
};

export default Review;