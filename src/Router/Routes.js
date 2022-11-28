import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services from '../Pages/Services/Services';


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/services',
                    element: <Services></Services>
                },
                {
                    path: '/services/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({params}) => {return fetch(`http://localhost:5000/services/${params.id}`)}
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                }
            ]
        }
    ])
    


export default router;