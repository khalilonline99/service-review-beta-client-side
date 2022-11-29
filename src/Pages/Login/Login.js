import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("")

    const handleUserLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();
                navigate("/");
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message)
            });
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 className="text-2xl font-semibold text-gray-700 mb-5">Login</h2>

            <form onSubmit={handleUserLogin}>
                <div className="flex flex-col w-2/4 mx-auto">

                    <div>
                        <label className="text-gray-700">Email Address</label>
                        <input id="emailAddress" type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder='your email here' />
                    </div>

                    <div>
                        <label className="text-gray-700">Password</label>
                        <input id="password" type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>


                    <div className="form-control mt-6 mx-auto">
                        <input className="btn btn-outline btn-primary" type="submit" value="LOGIN" />

                    </div>

                    {/* Error message show */}
                    {
                        errorMessage === "" ?

                            <></>
                            :
                            <div className="mx-auto w-3/4 p-0 mt-5">
                                <div className="alert alert-warning">
                                    <div>
                                        <span>{errorMessage}</span>
                                    </div>
                                </div>
                            </div>
                    }

                    <div className='mt-3'>
                        <h2>Dont have account? <Link className='link link-info' to='/register'>Register Here</Link></h2>
                    </div>
                </div>

            </form>
        </section>
    );
};

export default Login;