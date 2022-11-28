import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    return (
        <div>
            <h2 className='font-semibold text-4xl tracking-wide text-blue-400'>All Services:</h2>
            <div className='grid grid-cols-3 mt-8 ml-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;