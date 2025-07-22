"use client";

import React, { useState, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState([]);
  const [itemsVisible, setItemsVisible] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      setItemsVisible(Math.floor(width / 150)); // 150px per item
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const fetchCategory = async () => {
    const response = await fetch('https://swiggy-dummy-api.onrender.com/categories');
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    const itemsVisible = 14; // how many are visible on screen6
    const itemsToSlide = 3; // how many you slide each time
    const maxSlide = category.length - itemsVisible;

    if (slide >= maxSlide) return;

    const remaining = category.length - slide - itemsVisible;

    if (remaining <= 0) return; // no more items to show
    setSlide((prev) => prev + Math.min(itemsToSlide, remaining));
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide((prev) => prev - 3);
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[35px] font-bold'>What's on your mind?</div>
        <div className='flex'>
          <div
            className='flex justify-center items-center w-[30px] h-[30px] bg-[#D4A14D] rounded mx-2 cursor-pointer'
            onClick={prevSlide}
          >
            <FaLongArrowAltLeft />
          </div>
          <div
            className='flex justify-center items-center w-[30px] h-[30px] bg-[#D44D50] rounded mx-2 cursor-pointer'
            onClick={nextSlide}
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      {/* 🖼 Category Image Slider */}
      <div className='overflow-hidden'>
        <div
          className='flex duration-500'
          style={{ transform: `translateX(-${slide * 150}px)` }} // 150px width * slide
        >
          {category.map((cat, index) => (
            <div
              key={index}
              className='w-[100px] shrink-0 p-2 text-center'
            >
              <img
                src={`https://swiggy-dummy-api.onrender.com/images/${cat.image}`}
                alt={cat.name}
                className='w-full h-[100px] object-cover rounded'
              />
              <p className='mt-1 font-semibold'>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className='my-4 border-[2px]' />
    </div>
  );
}
