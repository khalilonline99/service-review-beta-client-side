import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { user, createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("")

    const handleCreateUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset();
            user.displayName = name;
            navigate('/login')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });

    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 className="text-2xl font-semibold text-blue-800">Register</h2>

            <form onSubmit={handleCreateUser}>
                <div className="flex flex-col mx-auto w-2/4 mt-5">
                    <div>
                        <label className="text-gray-700 ">Your Name</label>
                        <input id="username" type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700">Email Address</label>
                        <input id="emailAddress" type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700">Password</label>
                        <input id="password" type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div className="flex mt-6 mx-auto">
                    <input className="btn btn-outline btn-primary" type="submit" value="Register" />
                    </div>

                    <div className='mt-3'>
                        <h2>Already have account? <Link className='link link-info' to='/login'>Login Here</Link> </h2>
                    </div> 
                </div>

            </form>
        </section>
    );
};

export default Register;