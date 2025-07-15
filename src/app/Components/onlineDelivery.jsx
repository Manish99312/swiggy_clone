"use client";
import React, { useEffect, useState } from 'react';
import Card from './Card';

const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[35px] font-bold'>
          Restaurants with online food delivery in Jodhpur
        </div>
        {/* <div className='max-w-[1200px] mx-auto flex my-4 gap-3 border-red-500'>
          <div className='p-3 rounded-md shadow'>Filter</div>
        </div> */}
      </div>

     
      <div className='grid grid-cols-4 gap-3'>
        {
          data.map((d, i) => (
            <Card {...d} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default OnlineDelivery;
