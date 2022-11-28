import React from 'react';

const ServiceCard = ({service}) => {
    const {name, image, price, description} = service
    return (
        <div className="card w-96 bg-base-100 shadow-2xl my-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="services" /></figure>
            <div className="card-body text-left	">
                <h2 className="card-title">{name}</h2>
                <h4>Price: ${price}</h4>
                <p>{description.slice(0, 70)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;