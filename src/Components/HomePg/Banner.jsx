import React from 'react'
import banner from '../../assets/banner23.jpg'
const Banner = () => {
    return (
        <div className='max-w-full h-[615px] bg-cover bg-no-repeat flex justify-end items-center'
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='md:w-1/3 w-full md:mx-16 mx-5 md:block hidden'>

                <h3 className='font-style text-3xl mb-4 md:text-white text-coffee2'>Would you like a cup of delicious Coffee?</h3>
                <p className='text-sm mb-4 text-coffee5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <button className='bg-coffee5 text-coffee1 font-semibold font-style px-3 py-2 hover:bg-transparent border-2 border-dark hover:border-coffee6 hover:text-coffee5'>Learn More</button>
            </div>
        </div>
    )
}

export default Banner
