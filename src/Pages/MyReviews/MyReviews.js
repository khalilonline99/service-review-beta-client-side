import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    const [spinner, setSpinner] = useState(true);
    const [ignoreIt, forceUpdate] = useReducer(x => x + 1, 0);
    // console.log(user, reviews);

    // getting my review with email id
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('eduProToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
                setSpinner(false)
            })
    }, [reviews, logOut, user?.email])


    const handleReviewUpdate = (id, event) => {
        event.preventDefault();
        const form = event.target;
        const changedReview = form.editedReview.value
        // console.log(changedReview);

        fetch(`http://localhost:5000/editreview?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('eduProToken')}`,
            },
            body: JSON.stringify({ review: `${changedReview}` })
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                alert('Review Updated');
                handleClick();

            })
    }

    // for deleting the review by user
    const handleReviewDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this review?');
        if (proceed) {
            fetch(`http://localhost:5000/myreview/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('eduProToken')}`,
                }

            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        handleClick();
                        // console.log(reviews);
                    }
                })

        }
    }

    function handleClick() {
        forceUpdate();
    }

    return (
        <div className='mx-auto'>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <h2 className='text-2xl font-bold text-blue-700'>My reviews:</h2>

            {
                spinner ?
                    <div className='mx-auto mt-5' role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    <></>
            }

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