import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, price, description, image } = serviceDetails[0];
    const [userReviews, setUserReviews] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [userReviews]);

    const handleSubmitReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user.displayName || form.name.value;
        const serviceName = name;
        const review = form.UserReview.value;
        const serviceId = _id;
        console.log(name);

        const reviewData = {
            name: name,
            review: review,
            serviceId: serviceId,
            email: user?.email,
            serviceName: serviceName
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Review added successfully')
                }
                })
            .catch(er => console.error(er));
        // console.log(reviewData);
    }




    // console.log(serviceDetails);



    return (
        <div className='w-3/4 mx-auto my-16'>
            <h2 className='font-semibold text-4xl tracking-wide text-blue-400'>Service Details of: {name} </h2>
            <div className='mt-8'>
                <img className='mx-auto my-5' src="https://placehold.co/600x400" alt="" />
                <div>
                    <p className='text-left my-2'> <span className='font-bold'>Name:</span> {name} </p>
                    <p className='text-left my-2'> <span className='font-bold'>Details:</span> {description} </p>
                    <p className='font-bold text-left'> <span className='font-bold'>Price:</span> ${price} </p>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-2xl tracking-wide text-blue-600'>User Reviews:</h2>
            </div>

            {/* review part */}

            {
                user ?
                    <div>
                        <form className='flex flex-col items-center' onSubmit={handleSubmitReview}>
                            <textarea className="textarea textarea-bordered w-3/4 h-2 mt-5" name='name' defaultValue={user?.displayName} required></textarea>
                            <textarea className="textarea textarea-bordered w-3/4 mt-5" name='UserReview' placeholder="add your review" required></textarea>
                            <button className="btn btn-accent w-1/4 mt-3" type="submit">Add Review</button>
                        </form>
                    </div>
                    :
                    <div className='mt-5 bg-slate-200 p-3 rounded-md'>
                        <h2 className='my-4'>Please Log in to add your review</h2>
                        <button className='btn btn-primary'> <Link to='/login' state={{ from: location }} replace>Login</Link> </button>
                    </div>
            }

            {
                userReviews.map(userReview => <ReviewCard
                    key={userReview._id}
                    userReview={userReview}
                ></ReviewCard>)
            }

        </div>
    );
};

export default ServiceDetails;