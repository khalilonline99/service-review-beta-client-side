import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const navigate = useNavigate();
    const location = useLocation();
    console.log(children);
    if (loading) {
        return <p>....loading</p>
    }


    if (user) {
        return children
    }

    return <Navigate  to='/login' state={{ from: location }} replace></Navigate>

    // if (!user) {
    //     return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    // }

    // return children
};

export default PrivateRoute;