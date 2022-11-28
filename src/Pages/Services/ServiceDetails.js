import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {_id, name, price, description} = serviceDetails[0];
    // console.log(serviceDetails[0]);
    
    return (
        <div>
            <h2>Service Details of: {name} </h2>
            
        </div>
    );
};

export default ServiceDetails;