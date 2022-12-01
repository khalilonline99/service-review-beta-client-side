import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ServiceCard from '../Services/ServiceCard';
import AboutUs from './AboutUs';
import Reviews from './Reviews';

const Home = () => {
    const [servicesHome, setServicesHome] = useState([]);
    // const [pageTitle] = useContext(AuthContext);

    useEffect(() => {
        fetch('https://visa-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServicesHome(data.servicesHome))

    }, []);


    return (
        <div>
            <div className='relative container'>
                <Helmet>
                    <title>Edupro | Home</title>
                </Helmet>

                <Hero></Hero>
                <div className='my-12 ml-12 z-10'>
                    <h1 className='font-bold text-4xl tracking-wide my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600'>Services:</h1>
                    <div className='grid grid-cols-3'>
                        {
                            servicesHome.map(serviceHome => <ServiceCard
                                key={serviceHome._id}
                                service={serviceHome}
                            ></ServiceCard>)
                        }
                    </div>
                    <button className="btn btn-primary btn-outline mt-5"> <Link to='/services'>See All Services</Link> </button>
                </div>

                <div className='z-0 mt-12'>
                    <AboutUs></AboutUs>
                </div>

                <Reviews></Reviews>
            </div>

        </div>
    );
};

export default Home;