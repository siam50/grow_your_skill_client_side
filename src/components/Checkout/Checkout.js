import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const premiumCourse = useLoaderData();

    return (
        <div className='mt-3 mt-lg-5'>
            <h2 className='text-info'>Congratulations!!!</h2>
            <h3>You Gain Premimum <strong className='text-warning'>{premiumCourse.title}</strong> Course.</h3>
        </div>
    );
};

export default Checkout;