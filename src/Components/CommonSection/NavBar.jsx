import React, { useState } from 'react'
import logo from "../../assets/images/more/logo1.png"
import bgNav from "../../assets/images/more/15.jpg"
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      menu: 'Home',
      link: '/'
    },
    {
      menu: 'About',
      link: '/about'
    },
    {
      menu: 'Contact',
      link: '/contact'
    },
    {
      menu: 'Login',
      link: '/login'
    }
  ];
  return (
    <div className="sticky top-0 max-w-full">
      <div className=' bg-center bg-cover bg-no-repeat py-3' style={{backgroundImage: `url(${bgNav})`}}>
        <nav className="flex justify-between items-center w-full">
          <div className='md:w-1/5 w-4/5 md:mx-10 mx-5 transition-all duration-150 ease-linear delay-75 flex items-center'>
            <img src={logo} alt="" className='w-1/6' />
            <h1 className='md:text-3xl text-2xl text-center block font-semibold text-white font-style mx-2'>Coffee Store</h1>
          </div>

          <div className="md:w-96 w-full md:mx-10 mx-0 ">

            <div className={`w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
            ${open ? 'top-14' : '-top-80'}`} style={{backgroundImage: `url(${bgNav})`}}>
              {
                navItems.map(item =>
                  <Link key={item.menu}
                    onClick={() => setOpen(!open)}
                    to={item.link}
                    className='text-white text-center md:w-auto w-full md:mt-0 mt-3 font-bold capitalize px-3 py-1 rounded hover:shadow-lg hover:bg-coffee5 hover:text-coffee1'
                  >{item.menu}</Link>
                )
              }
            </div>

          </div>
          <div className='md:hidden block mx-5'>
            <button onClick={() => setOpen(!open)}>
              {
                !open ? <HiOutlineMenu className='w-6 h-6 text-white' /> : <HiOutlineX className='w-6 h-6 text-white' />
              }
            </button>
          </div>


        </nav>
      </div>
    </div>
  )
}

export default NavBar
