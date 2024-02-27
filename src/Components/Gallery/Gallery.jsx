import React from 'react'
import cup1 from "../../assets/images/cups/Rectangle 9.png"
import cup2 from "../../assets/images/cups/Rectangle 10.png"
import cup3 from "../../assets/images/cups/Rectangle 11.png"
import cup4 from "../../assets/images/cups/Rectangle 12.png"
import cup5 from "../../assets/images/cups/Rectangle 13.png"
import cup6 from "../../assets/images/cups/Rectangle 14.png"
import cup7 from "../../assets/images/cups/Rectangle 15.png"
import cup8 from "../../assets/images/cups/Rectangle 16.png"

const Gallery = () => {
    return (
        <div className='my-20'>
            <div className='text-center text-coffee1 mb-14'>
                <small> Follow Us Now</small>
                <h1 style={{ fontFamily: 'Shadows Into Light' }} className='text-4xl font-bold'>Follow On Instagram</h1>
            </div>
            <div className='w-3/5 mx-auto'>
            <div className="grid grid-cols-4 gap-5">
                <img className='rounded-md' src={cup1} alt="" />
                <img className='rounded-md' src={cup2} alt="" />
                <img className='rounded-md' src={cup3} alt="" />
                <img className='rounded-md' src={cup4} alt="" />
                <img className='rounded-md' src={cup5} alt="" />
                <img className='rounded-md' src={cup6} alt="" />
                <img className='rounded-md' src={cup7} alt="" />
                <img className='rounded-md' src={cup8} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Gallery
