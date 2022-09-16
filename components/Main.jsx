import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div className='w-full h-screen text-center mt-6'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase tracking-wide text-gray-500 my-4'>
                        Let&apos;s have a journey together
                    </p>
                    <h2 className='md:animate-flash animate-ease my-4'>Hi, I&apos;m <span className='text-[#59CE8F]'>Trung</span></h2>
                    <h3 className='my-4 text-gray-700'>
                        A Front-End Web Developer
                    </h3>
                    <p className='py-4 text-gray-600 max-w-[40%] m-auto my-2'>
                        I built websites with all my heart , manageable codebase , high visual quality , great user experience. Along the latest technologies and tools for the best performance and maintenance.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto p-4 my-4'>
                        
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <FaLinkedinIn size={20}/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <FaGithub size={20}/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <AiOutlineMail size={20}/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                                <BsFillPersonLinesFill size={20}/>
                            </div>
                    

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
