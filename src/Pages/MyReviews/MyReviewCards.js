import React from 'react';

const MyReviewCards = ({ reviews }) => {

    const { review, serviceName } = reviews;

    console.log(reviews);
    return (
        <div className='card bg-base-100 shadow-xl flex'>
            <div className="w-96 mx-auto">
                <div className="card-body">
                    <h2 className="card-title"> {serviceName || "unknown"} </h2>
                    <p> {review} </p>
                </div>
            </div>
            <div className='flex flex-col w-2'>
                <button className='btn btn-sm btn-success m-2'>+</button>
                <button className='btn btn-sm btn-error m-2'>X</button>
            </div>

        </div>
    );
};

export default MyReviewCards;