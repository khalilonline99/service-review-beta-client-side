import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';
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
                }
            ]
        }
    ])
    


export default router;