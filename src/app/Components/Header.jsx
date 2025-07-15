"use client";
import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { IoCart } from "react-icons/io5";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            name: "Search", icon: <IoSearch />
        },
        { name: "Offers", icon: <MdDiscount />, Sup: "New" },
        { name: " Help", icon: <FaHandsHelping /> },
        { name: "Sign In", icon: <GoSignIn /> },
        { name: "Iocart", icon: <IoCart /> },

    ]
    return (
        <>
            <div className='black-overlay  w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>

                <div className='w-[500px] bg-white h-full absolute duration-[400ms]'
                    style={
                        {
                            left: toggle ? '0%' : '-100%'
                        }
                    }
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    this is text
                </div>
            </div >
            <header className='p-[15px] shadow-xl text-[#686b78] sticy top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
                    <div className='w-[100px]'><img src="images/logo.png" className='w-full' alt='' /></div>
                    <div className=''>
                        <span className='font-bold border-b border-b-[3px] border-[red]'>Ratanada</span> jodhpur,Rajastan,India<RxCaretDown fontSize={25} className='inline text-[#ff5200] cursor-pointer' onClick={showSideMenu} /></div>
                    <nav className='flex list-none border-black ml-auto gap-5 text-[18px] font-semibold'>
                        {links.map((link, index) => (
                            <li key={index} className='flex items-center gap-2 cursor-pointer'>
                                {link.icon}
                                {link.name}
                                <sub> {link.Sup}</sub>
                            </li>
                        ))}
                    </nav>

                </div>

            </header>
        </>
    )
}

