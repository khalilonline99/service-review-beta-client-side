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
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServicesHome(data.servicesHome))

    }, []);


    return (
        <div>
            <Helmet>
                <title>Edupro | Home</title>
            </Helmet>

            <Hero></Hero>
            <div className='my-8 ml-12'>
                <h1 className='font-bold text-4xl tracking-wide my-4'>Check Out Our Services</h1>
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
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;