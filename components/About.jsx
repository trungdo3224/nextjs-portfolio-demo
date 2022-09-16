import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h3 className='uppercase text-xl tracking-widest text-[#59CE8F]'>
            About Me
          </h3>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am a dedicated developer
          </p>
          <p className='py-2 text-gray-600'>
            Eat, sleep, code, innovation, repeat, that&apos;s my slogan. 
            I love creating and building applications
            that help people in everyday life. I love how all the small things work together
            to make something great happens and have no doubt, my responsibility is to create
            applications that not only profit the organization but also contribute to society 
            in a positive way.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src="/aboutme.png" width={700} height={700} objectFit="cover" className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;