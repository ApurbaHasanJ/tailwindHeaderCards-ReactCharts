import React, {useState, useEffect} from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])



    return (
        <div className='mx-12 mt-12'>
            <h1 className='text-4xl text-center text-purple-950 bg-purple-300 rounded-md font-semibold p-4'>Awesome Affordable Prices</h1>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                
                />)
            }
            </div>
        </div>
    );
};

export default PriceList;