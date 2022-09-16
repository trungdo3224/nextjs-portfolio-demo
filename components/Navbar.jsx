import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    const handleSideNav = () => {
        setSideNav(!sideNav);
    }

    return (
        <div className='fixed top-0 w-full h-20 z-[100] bg-[#E8F9FD]'>
            <div className='flex justify-between items-center w-full h-full p-4 2xl:px-10 '>
                <Image src='/logo.png' width={75} height={50} className="cursor-pointer" alt='logo' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='m-5 text-sm font-bold'>
                                Home
                            </li>
                        </Link>
                        <Link href="/">
                            <li className='m-5 text-sm font-bold'>
                                About
                            </li>
                        </Link>
                        <Link href="/">
                            <li className='m-5 text-sm font-bold'>
                                Skills
                            </li>
                        </Link>
                        <Link href="/">
                            <li className='m-5 text-sm font-bold'>
                                Projects
                            </li>
                        </Link>
                    </ul>
                    <div className='md:hidden' onClick={handleSideNav}>
                        <AiOutlineMenu size={25}

                            className='cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            {/* side nav responsive */}
            <div className={sideNav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={sideNav ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#E8F9FD] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/logo.png' width={70} height={50} alt='' className='cursor-pointer' />
                        <div className='rounded-full shadow-sm shadow-gray-400 cursor-pointer p-3' onClick={handleSideNav}>
                            <AiOutlineClose className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something awesome together!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href={""}>
                                <li className='py-4 text-sm font-bold'>
                                    Home
                                </li>
                            </Link>
                            <Link href={""}>
                                <li className='py-4 text-sm font-bold'>
                                    About me
                                </li>
                            </Link>
                            <Link href={""}>
                                <li className='py-4 text-sm font-bold'>
                                    My Skills
                                </li>
                            </Link>
                            <Link href={""}>
                                <li className='py-4 text-sm font-bold'>
                                    My Projects
                                </li>
                            </Link>
                            <Link href={""}>
                                <li className='py-4 text-sm font-bold'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase tracking-wide text-[#59ce8f]'>Connect to me</p>
                        </div>
                        <div className='flex items-center justify-between my-8 w-full sm:w-[100%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
