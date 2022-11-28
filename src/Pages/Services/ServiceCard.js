import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, image, price, description } = service
    return (
        <div className="card w-96 bg-base-100 shadow-2xl my-3">

            {/* <figure><img src="https://placeimg.com/400/225/arch" alt="services" /></figure> */}

            <figure>
                <PhotoProvider>
                    <PhotoView src="https://placeimg.com/400/225/arch">
                        <img src="https://placeimg.com/400/225/arch" alt="Edu Pro service review" />
                    </PhotoView>
                </PhotoProvider>
            </figure>

            <div className="card-body text-left	">
                <h2 className="card-title">{name}</h2>
                <h4>Price: ${price}</h4>
                <p>{description.slice(0, 70)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm"> <Link to={`/services/${_id}`} >View Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;