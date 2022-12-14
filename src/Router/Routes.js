import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import AddService from '../Pages/AddService/AddService';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyReviews from '../Pages/MyReviews/MyReviews';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services from '../Pages/Services/Services';
import PrivateRoute from './PrivateRoute';


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
                    loader: ({params}) => {return fetch(`https://visa-service-server.vercel.app/services/${params.id}`)}
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/profile',
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {
                    path: '/myreviews',
                    element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                },
                {
                    path: '/addservice',
                    element: <PrivateRoute><AddService></AddService></PrivateRoute>
                }
            ]
        }
    ])
    


export default router;