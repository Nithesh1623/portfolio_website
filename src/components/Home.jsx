import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex items-center'>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto px-8 text-left'>
        <div className='text-center sm:text-left'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Nithesh
          </h1>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] mt-2 sm:mt-4'>
            Full Stack Developer.
          </h2>
        </div>
        <p className='text-[#8892b0] py-4 max-w-lg sm:max-w-2xl mx-auto' >
          Explore a digital voyage through my portfolio! I am a dedicated Full Stack Developer with a passion for crafting engaging web applications. Emphasizing both front-end aesthetics and back-end functionality, I bring a comprehensive approach to my projects. Join me as I showcase a fusion of creativity and technical expertise, delivering exceptional digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
