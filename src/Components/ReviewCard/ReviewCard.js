import React from 'react';

const ReviewCard = ({ userReview }) => {

    const { _id, userName, picture, review } = userReview;
    // console.log("review card details",userReview.userName);

    return (
        <div className='card bg-base-100 shadow-xl flex items-start my-3'>
            <div className='p-5 flex'>
                <div className="avatar placeholder mx-2">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
                        <span className="text-sm">{userName.toUpperCase().slice(0,2)}</span>
                    </div>
                </div>
                <p className='font-bold mr-2 w-72 text-left'>{userName}:</p>
                <p className='font-thin text-left'>{review}</p>
            </div>
            
        </div>
    );
};

export default ReviewCard;