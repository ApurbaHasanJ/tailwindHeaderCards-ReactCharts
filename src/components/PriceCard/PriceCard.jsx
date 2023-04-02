import React from 'react';
import Feature from '../Features/Feature';
// import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-200 flex flex-col mt-4 rounded-md p-4'>
            <h2 className='text-center'>
                <span className='text-purple-500 text-5xl  font-extrabold'>
                    {price.price}
                </span>
                <span className='text-2xl text-indigo-800 font-semibold'>
                    /Month
                </span>
                </h2>
            <h5 className='text-2xl text-center my-3'>{price.name}</h5>
            <p className='font-semibold underline text-indigo-800 text-xl mb-2'>Features:</p>
            <ul className='mb-5'>
            {
                price.features.map((feature, idx) => <Feature
                feature={feature}
                key={idx}
                ></Feature>)
            }
            </ul>
            <button className='mt-auto font-semibold w-full text-indigo-900 text-lg bg-purple-400 p-3 rounded-lg  hover:border hover:border-purple-900'>Buy Now</button>
        </div>
    );
};

export default PriceCard;