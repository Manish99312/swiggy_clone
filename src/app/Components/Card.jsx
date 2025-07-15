import React from 'react'

export default function Card(props) {
  return (
    <div className='w[270px] shrink-0 gow mb-3'>
      <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className='group-hover:scale-110 duration-150 object-cover w-full h-full' src={"http://localhost:5000/images/" + props.image} alt="" />
        <div className='image-overlay absolute w-full h-full top-0 full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter text-slate-600'>
          {props.name}
        </div>
        <div>
          {props.place}
        </div>
      </div>
    </div>
  )
}
