import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center pt-28'>
      <div className='pb-4 text-center mb-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
          Contact
        </p>
      </div>
      <div className='text-center sm:text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ccd6f6]'>
          Let's Talk
        </h1>
        <h2 className='text-lg sm:text-2xl lg:text-4xl font-bold text-[#8892b0] mt-2 sm:mt-4'>
          Share your excitement with us!
        </h2>
        <div className='py-6 flex flex-col items-center'>
          <div className='hover:scale-110 duration-500'>
            <a
              className='flex items-center text-xl font-bold text-gray-300'
              href='mailto:nikki16297@gmail.com'
            >
              <HiOutlineMail className='mr-2 text-2xl' />
              nikki16297@gmail.com
            </a>
          </div>
          <div className='hover:scale-110 duration-500'>
            <a
              className='flex items-center text-xl font-bold text-gray-300 mt-4'
              href='tel:+16380435878'
            >
              <HiOutlinePhone className='mr-2 text-2xl' />
              6380435878
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
