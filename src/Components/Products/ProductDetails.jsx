import React from 'react'
import bgAdd from "../../assets/images/more/11.png"
import { Link, useLoaderData } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6';

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='bg-cover  bg-no-repeat' style={{ backgroundImage: `url(${bgAdd})` }}>
            <button className='my-10 ml-20'>
                <Link to="/" className='font-style text-lg font-semibold text-coffee2'>
                    <FaArrowLeftLong className='inline' /> Back To Home
                </Link>
            </button>
            <div className="bg-coffee6 p-10 md:w-1/2 md:mx-auto mx-4">
                <div className="flex justify-around items-center">
                    <img className='h-60' src={product.photo} alt="" />
                    <div className='text-lg'>
                        <p><span className="font-bold">Name:</span> {product.name} </p>
                        <p><span className="font-bold">Chef:</span> {product.chef} </p>
                        <p><span className="font-bold">Price:</span> {product.price} </p>
                        <p><span className="font-bold">Supplier:</span> {product.supplier} </p>
                        <p><span className="font-bold">Category:</span> {product.category} </p>
                        <p><span className="font-bold">Details:</span> {product.details} </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails
