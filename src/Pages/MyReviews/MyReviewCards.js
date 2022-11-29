import React, { useEffect, useState } from 'react';

const MyReviewCards = ({ reviews , handleReviewUpdate}) => {

    const { review, serviceName, _id } = reviews;
    const [showModal, setShowModal] = React.useState(false);
    const [reviewId, setReviewId] = useState("")

    // useEffect( () => {
    //     fetch(`http://localhost:5000/editreview?id=${reviewId}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // } ,[])
    
   

    // console.log(reviews._id);

    return (

        <div className="card w-96 bg-base-300 my-2 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{serviceName || "unknown"}</h2>
                <p className='text-left'>{review}</p>
                <div className="card-actions justify-end items-center">
                    {/* <button className='btn btn-success m-2'>Edit</button> */}

                    {/* start */}
                    <>
                        <button
                            className="bg-green-700 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Edit
                        </button>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <form onSubmit={(event) => handleReviewUpdate(_id, event)} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                {serviceName || "unknown"}
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-2 flex-auto">
                                                {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                {review}
                                                </p> */}
                                                <textarea type="text" name='editedReview' defaultValue={review} className="w-full my-4 text-slate-500 text-md leading-relaxed"/>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit"
                                                    
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </>


                    {/* end */}

                    <button className='btn btn-error m-2'>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default MyReviewCards;