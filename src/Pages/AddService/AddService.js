import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {

    const [toast, setToast] = useState(false);
    const {user} = useContext(AuthContext);

    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value
        const price = form.price.value
        const description = form.details.value

        const addedService = {
            name: name,
            image: image,
            price: price,
            description: description,
            email: user.email,
            date: Date(),
        }

        fetch('https://visa-service-server.vercel.app/addservicebyuser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                setToast(true)
                // console.log(data);
                setTimeout(function () {
                    setToast(false);
                  }, 2500);

            })
            .catch(err => console.error(err));

        // console.log(image, name, price, details);
    }

  

    return (
        <div className='mx-auto'>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <h3 className='font-bold text-xl text-blue-500 mb-10'>Add your service:</h3>

            <form className='bg-blue-200 p-5 w-3/5 rounded mx-auto' onSubmit={handleAddService}>
                <div className='my-3 flex justify-center'>
                    <label className='mx-2'> Image:</label>
                    <input type="text" name='image' placeholder='Add service image' required/>
                </div>
                <div className='my-3 flex justify-center'>
                    <label className='mx-2'> Name:</label>
                    <input type="text" name='name' placeholder='Add service Name' required/>
                </div>
                <div className='my-3 flex justify-center'>
                    <label className='mx-2'> Price:</label>
                    <input type="text" name='price' placeholder='Add service price' required/>
                </div>
                <div className='my-3 flex justify-center'>
                    <label className='mx-2'> Details:</label>
                    <textarea name="details" cols="30" rows="5" placeholder='Add Service details' required></textarea>
                </div>
                <button className='btn btn-primary' type='submit'>Add Service</button>
            </form>

            {
                toast ?

                    <div className="toast toast-middle toast-center w-1/5">
                        <div className="alert alert-success mx-auto">
                            <div className='mx-auto'>
                                <span className='text-center text-bold'>Your service added successfully.</span>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    );
};

export default AddService;