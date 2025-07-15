"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

export default function TopRest() {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null); // 👈 reference for scroll container

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  // 👉 Scroll Handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[35px] font-bold'>Top restaurant chains in Jodhpur</div>
        <div className='flex'>
          <div
            onClick={scrollLeft}
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#D4A14D] rounded mx-2'
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#D44D50] rounded mx-2'
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className='flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth'
      >
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>

      <hr className='my-3 border-[2px]' />
    </div>
  );
}
