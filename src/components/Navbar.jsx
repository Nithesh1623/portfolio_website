import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-white text-black'>
      <div className='hover:scale-110 duration-500'>
        <img src={Logo} alt='Logo Image' style={{ width: '50px', height: '30px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} spy={true} activeClass='active' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} spy={true} activeClass='active' className='nav-link'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} spy={true} activeClass='active' className='nav-link'>
            Skills
          </Link>
        </li>
        {/* <li>
          <Link to='work' smooth={true} duration={500} spy={true} offset={-20} activeClass='active' className='nav-link'>
            Work
          </Link>
        </li> */}
        <li>
          <Link to='contact' smooth={true} duration={500} spy={true} offset={-20} activeClass='active' className='nav-link'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'

        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white font-bold'
              href='https://www.linkedin.com/in/nithesh-p-5a1aaa219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold'
              href='https://github.com/Nithesh1623'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFA500]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold'
              href='mailto:nikki16297@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff3366]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold'
              href='https://drive.google.com/drive/folders/1X_4pp_1WgFPdeHtnIpTdAAxTmnMEfIBe'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
