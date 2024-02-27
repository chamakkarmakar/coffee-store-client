import React from 'react'
import { GiCoffeeCup,GiCoffeeBeans } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
const Services = () => {
    return (
        <div className='bg-coffee5 py-14 mb-20'>
            <div className="md:w-3/4 w-full grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 md:mx-auto mx-10">
                <div className='md:w-52 w-36 text-coffee2'>
                    <GiCoffeeCup className='w-16 h-16 mb-3'/>
                    <h2 className='font-semibold text-2xl mb-2' style={{fontFamily:'Shadows Into Light'}}>Awsome Aroma</h2>
                    <p className='text-sm '>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='md:w-52 w-36 text-coffee2'>
                    <FaAward className='w-16 h-16 mb-3'/>
                    <h2 className='font-semibold text-2xl mb-2' style={{fontFamily:'Shadows Into Light'}}>High Quality</h2>
                    <p className='text-sm '>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='md:w-52 w-36 text-coffee2'>
                    <GiCoffeeBeans className='w-16 h-16 mb-3'/>
                    <h2 className='font-semibold text-2xl mb-2' style={{fontFamily:'Shadows Into Light'}}>Pure Grades</h2>
                    <p className='text-sm '>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='md:w-52 w-36 text-coffee2'>
                    <BiCoffeeTogo className='w-16 h-16 mb-3'/>
                    <h2 className='font-semibold text-2xl mb-2' style={{fontFamily:'Shadows Into Light'}}>Proper Roasting</h2>
                    <p className='text-sm '>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    )
}

export default Services
