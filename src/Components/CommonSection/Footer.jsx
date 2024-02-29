import React from 'react'
import bgFooter from "../../assets/images/more/13.jpg"
import logo from "../../assets/images/more/logo1.png"
import bgNav from "../../assets/images/more/15.jpg"
import { BsFacebook } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc";
import { RxInstagramLogo } from "react-icons/rx";
import { ImLinkedin } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (

    <div>
      <div className='mt-40 bg-cover bg-no-repeat py-20 md:px-40 px-20' style={{ backgroundImage: `url(${bgFooter})` }} >
        <div className="flex md:justify-evenly md:flex-row flex-col">

          <div className='md:w-3/5 w-full'>
            <img src={logo} alt="" className='w-1/12' />
            <h1 className='font-style text-2xl font-bold text-coffee1s '>Coffee Store</h1>
            <p className="text-sm md:w-4/5 my-5">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className='my-8'>
              <BsFacebook className='inline w-6 h-6 ml-5' />
              <VscTwitter className='inline w-6 h-6 ml-5' />
              <RxInstagramLogo className='inline w-6 h-6 ml-5' />
              <ImLinkedin className='inline w-6 h-6 ml-5' />
            </div>
            <div className='mt-10'>
              <h2 className='font-style text-2xl font-bold text-coffee1s mb-7'>Get in Touch</h2>
              <p className='py-2 text-sm'><FaPhone className='inline' /> <span>+88 01533 333 333</span></p>
              <p className='py-2 text-sm'><MdEmail className='inline' /> <span>info@gmail.com</span></p>
              <p className='py-2 text-sm'><IoLocationSharp className='inline' /> <span>72, Wall street, King Road, Dhaka</span></p>
            </div>
          </div>

          <div className='mt-20'>
            <h1 className='font-style text-2xl font-bold text-coffee1 mb-5 text-center'>Connect With Us</h1>
            <form className='flex flex-col justify-between '>
              <input className='py-2 px-3 mb-5 outline-none rounded placeholder-coffee5 text-coffee3 font-semibold ' type="text" name="name" placeholder='Name' />
              <input className='py-2 px-3 mb-5 outline-none rounded placeholder-coffee5 text-coffee3 font-semibold' type="email" name="email" placeholder='Email' />
              <textarea className='py-2 px-3 mb-5 outline-none rounded placeholder-coffee5 text-coffee3 font-semibold' name="msg" cols="40" rows="5" placeholder='Message'></textarea>
              <button className='font-style rounded-3xl font-semibold text-xl border-2 text-white bg-coffee3 border-coffee5 py-1 px-2 w-1/2 hover:border-coffee1 hover:bg-transparent hover:text-coffee3'>Submit Message</button>
            </form>
          </div>

        </div>

      </div>
      <div className=' bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgNav})` }}>
        <p className='md:text-xl text-md text-center block font-semibold text-white font-style py-1'>© {new Date().getFullYear()} Coffee Store | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
