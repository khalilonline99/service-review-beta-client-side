import { GoogleAuthProvider } from 'firebase/auth';
import { createBrowserHistory } from 'history';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [errorMessage, setErrorMessage] = useState("")

    const from = location.state?.from?.pathname || '/';

    // console.log(from);

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
                setErrorMessage("");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message)
            });
    }

    

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(errorMessage);
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
                        <input id="password" type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder='Password' />
                    </div>


                    <div className="form-control mt-6 mx-auto">

                        <button className="btn btn-outline btn-primary w-44" type="submit">Login</button>
                    </div>


                </div>

            </form>

            <div>
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
                <form>
                <button className="btn btn-outline btn-primary my-3" onClick={handleGoogleLogin}>Login with Google</button>
                </form>
                <div className='mt-3'>
                    <h2>Dont have account? <Link className='link link-info' to='/register'>Register Here</Link></h2>
                </div>
            </div>
        </section>
    );
};

export default Login;