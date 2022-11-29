import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])

    // console.log(user.email);
    // console.log(reviews);

    return (
        <div className='mx-auto'>
            <h2 className='text-2xl font-bold text-blue-700'>My reviews:</h2>
            <div className='grid grid-cols-3 mx-auto'>

                {
                    reviews.map(reviewAll => <MyReviewCards
                        key={reviewAll._id}
                        reviews={reviewAll}
                    ></MyReviewCards>)
                }
            </div>
        </div>
    );
};

export default MyReviews;