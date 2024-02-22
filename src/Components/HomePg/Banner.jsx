import React from 'react'
import banner from '../../assets/espresso-surrounded-by-scattered-coffee-beans-dark-surface.jpg'
const Banner = () => {
    return (
        <div className='max-w-full max-h-screen mt-[-150px] bg-cover bg-no-repeat py-80 flex md:justify-end justify-center'
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='md:w-1/3 w-full md:mx-16 mx-5 md:block hidden'>

                <h3 className='text-3xl mb-4 md:text-white text-coffee2' style={{ fontFamily: 'Shadows Into Light' }}>Would you like a cup of delicious Coffee?</h3>
                <p className='text-sm mb-4 text-coffee5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <button className='bg-coffee5 text-coffee1 font-semibold px-3 py-2' style={{ fontFamily: 'Shadows Into Light' }}>Learn More</button>
            </div>
        </div>
    )
}

export default Banner
