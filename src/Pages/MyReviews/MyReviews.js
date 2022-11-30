import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user, reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [{user,reviews }])

    // console.log(user.email);
    // console.log(reviews);

    const handleReviewUpdate = (id, event) => {
        const form = event.target;
        const changedReview = form.editedReview.value
        console.log(changedReview);
        // let databody = {
        //     "review": changedReview
        // }
        // setReviewId(id)
        fetch(`http://localhost:5000/editreview?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ review: `${changedReview}` })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
                alert('Review Updated');
            })
    }

    const handleReviewDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this review?');
        if (proceed) {
            fetch(`http://localhost:5000/myreview/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                    }
                })

        }
    }

    return (
        <div className='mx-auto'>
            <h2 className='text-2xl font-bold text-blue-700'>My reviews:</h2>
            <div className='grid grid-cols-3 mx-auto'>

                {
                    reviews.length > 0 ?

                        reviews.map(reviewAll => <MyReviewCards
                            key={reviewAll._id}
                            reviews={reviewAll}
                            handleReviewUpdate={handleReviewUpdate}
                            handleReviewDelete={handleReviewDelete}
                        ></MyReviewCards>)
                        :
                        <h2 className='font-bold text-xl text-center col-span-3 mt-5'>You have No reviews. Please browse <Link className='link link-info' to='/services' >services</Link> </h2>
                }
            </div>
        </div>
    );
};

export default MyReviews;