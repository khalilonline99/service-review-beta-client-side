import React from 'react';

const MyReviewCards = ({ reviews }) => {

    const { review, serviceName } = reviews;

    // console.log(reviews);
    return (
        
            <div className="card w-96 bg-base-300 my-2 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{serviceName || "unknown"}</h2>
                    <p className='text-left'>{review}</p>
                    <div className="card-actions justify-end">
                    <button className='btn btn-sm btn-success m-2'>+</button>
                <button className='btn btn-sm btn-error m-2'>X</button>
                    </div>
                </div>
            </div>

    );
};

export default MyReviewCards;