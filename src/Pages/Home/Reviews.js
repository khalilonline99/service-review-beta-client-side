import React from 'react';

const Reviews = () => {
    return (
        <div className='my-20 mx-auto'>
            <h2 className='font-bold text-xl tracking-wide my-4'>What the users say about EduPro</h2>

            <div className='grid grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">Hurry Kane</h2>
                        <p>"I got and issue for visa refusal. They simple set a goal for me, and yeah I am now at Canada"</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">John AJ</h2>
                        <p>"Was looking for a good higher study option at Canada, found EduPro and checked the reviews here. After verifying these I contacted a agency and got good result from them. I am still on process."</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">Aaron Switch</h2>
                        <p>"EduPro will save your time. You dont need to visit all agency and get details from them. You are getting solid reviews from here easily."</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;