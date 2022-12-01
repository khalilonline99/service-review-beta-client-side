import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-80 bg-blue-600 mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse p-5">
                <img src="https://i.ibb.co/3YSJFT5/Untitled-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Finding the best is now more easy!</h1>
                    <p className="py-6 text-white">Find the best visa consultant for higher study aborad. Get the reviews from users and check about their services.</p>
                    <button className="btn glass">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;