import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {_id, name, price, description, image} = serviceDetails[0];
    // console.log(serviceDetails[0]);
    
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
            
        </div>
    );
};

export default ServiceDetails;