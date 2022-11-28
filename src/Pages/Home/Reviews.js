import React from 'react';

const Reviews = () => {
    return (
        <div className='my-20 mx-auto'>
            <h2 className='font-bold text-4xl tracking-wide my-4'>Check out some recent reviews</h2>

            <div className='grid grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">Hurry Kane</h2>
                        <p>"I got and issue for visa refusal. They simple set a goal for me, and yeah I am now at Canada"</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">Hurry Kane</h2>
                        <p>"I got and issue for visa refusal. They simple set a goal for me, and yeah I am now at Canada"</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold">Hurry Kane</h2>
                        <p>"I got and issue for visa refusal. They simple set a goal for me, and yeah I am now at Canada"</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;