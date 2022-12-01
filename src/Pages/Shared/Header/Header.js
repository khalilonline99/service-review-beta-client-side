import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.email);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {

  }, [user])

  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            {
              user ?
                <>
                  <li><Link to='/myreview'>My Reviews</Link></li>
                  <li><Link to='/addservice'>Add Service</Link></li>
                  <li><Link to='/profile'>Profile</Link></li>
                </>
                :
                <></>
            }
            <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>

        <Link className="btn btn-ghost normal-case text-2xl">EduPro</Link>
      </div>

      {/* desktop view menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          {
            user ?
              <>
                <li><Link to='/myreviews'>My Reviews</Link></li>
                <li><Link to='/addservice'>Add Service</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
              </>
              :
              <></>
          }
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </div>

      {
        user ?
          <div className="navbar-end">
            <h2 className='text-sm mr-2'>{user.displayName}</h2>
            <button className='btn btn-primary' onClick={handleSignOut} >Logout</button>
          </div>

          :
          <div className="navbar-end">
            <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
          </div>
      }

    </div>
  );
};

export default Header;