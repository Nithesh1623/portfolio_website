import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-full pb-64 bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full h-full px-8 pt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 pt-12'>
            About
          </p>
          <div className='max-w-[1000px] w-full mt-4'>
          <p className='text-4xl font-bold pb-2'>
            Welcome! Take a moment to explore the surroundings.
          </p>
              <p className='text-lg text-left'>
                Greetings, I'm Nithesh, a dedicated software developer with 1.6 years of experience in the dynamic realm of software development. My primary focus is on backend product development, where I excel in crafting robust solutions that power digital experiences.
                I possess intermediate skills in frontend development, allowing me to contribute across the entire software development lifecycle. What sets me apart is my enthusiasm for learning and adapting to new technologies. I thrive on challenges and am eagerly awaiting the opportunity to showcase my skills and contribute to innovative projects.
                Driven by a passion for staying at the forefront of technological advancements, I am committed to continuous learning and growth in the ever-evolving field of software development. Let's embark on this journey of innovation together.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
