import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const [servicesHome, setServicesHome] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServicesHome(data.servicesHome))

    }, []);

    return (
        <div>
            <Hero></Hero>
            <div className='my-6'>
                <h1 className='font-semibold text-2xl tracking-wide'>Check Out Our Services</h1>
                <div className='grid grid-cols-3'>
                {
                    servicesHome.map(serviceHome => <ServiceCard
                        key={serviceHome._id}
                        service={serviceHome}
                    ></ServiceCard>)
                }
                </div>
                <button className="btn btn-primary mt-5"> <Link to='/services'>See All Services</Link> </button>
            </div>
        </div>
    );
};

export default Home;