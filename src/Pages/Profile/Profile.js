import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, handleProfile } = useContext(AuthContext);
    const [ignoreIt, forceUpdate] = useReducer(x => x + 1, 0);
    const [nameOnSite, setNameOnSite] = useState(user?.displayName || "");

    
    
    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        handleProfile(name);
        form.reset();
        alert('Profile updated')
        setNameOnSite(name);
        handleClick()
        
    }
    
    function handleClick() {
        forceUpdate();
    }
    
    useEffect(() => {

    }, [user]);

    return (
        <div className='bg-slate-200 p-10 mt-10'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <form onSubmit={handleUpdateProfile} className="flex flex-col w-2/4 mx-auto mt-10">
                <input type="text" name='fullName' defaultValue={user?.displayName} />
                <button type='submit' className='btn btn-primary w-1/4 mx-auto mt-5'>Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;