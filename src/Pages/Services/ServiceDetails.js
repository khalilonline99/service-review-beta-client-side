import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { _id, name, price, description, image } = serviceDetails[0];
    const [userReviews, setUserReviews] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data => setUserReviews(data))
    },[]);

    // console.log(userReviews);

    return (
        <div className='w-3/4 mx-auto my-16'>
            <h2 className='font-semibold text-4xl tracking-wide text-blue-400'>Service Details of: {name} </h2>
            <div className='mt-8'>
                <img className='mx-auto my-5' src="https://placehold.co/600x400" alt="" />
                <div>
                    <p className='text-left my-2'> <span className='font-bold'>Name:</span> {name} </p>
                    <p className='text-left my-2'> <span className='font-bold'>Details:</span> {description} </p>
                    <p className='font-bold text-left'> <span className='font-bold'>Price:</span> ${price} </p>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-2xl tracking-wide text-blue-600'>User Reviews:</h2>
            </div>

            {/* review part */}

            <div className='flex flex-col items-center'>
            <textarea className="textarea textarea-bordered w-3/4 mt-5" placeholder="add your review"></textarea>
            <button className="btn btn-accent w-1/4 mt-3">Add Review</button>
            </div>

            {
                userReviews.map (userReview => <ReviewCard
                key={userReview._id}
                userReview={userReview}
                ></ReviewCard> )
            }

        </div>
    );
};

export default ServiceDetails;