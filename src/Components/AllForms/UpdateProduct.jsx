import React from 'react'
import bgAdd from "../../assets/images/more/11.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Form from './Form';

const UpdateProduct = () => {
    const handleUpdateProduct = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;

        console.log(name,chef,supplier,price,category,details,photo);

        event.target.reset();
    }
  return (
    <div className='bg-cover  bg-no-repeat' style={{ backgroundImage: `url(${bgAdd})` }}>
    <button className='my-10 ml-20'>
        <Link to="/" className='font-style text-lg font-semibold text-coffee2'>
            <FaArrowLeftLong className='inline' /> Back To Home
        </Link>
    </button>
    <div className="bg-coffee6 p-10 md:w-1/2 md:mx-auto mx-4">
        <div className='text-center'>
            <h2 className="font-style text-coffee2 font-bold text-2xl mb-3">Update Existing Coffee Details</h2>
            <p className='text-sm text-coffee1'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <Form handleSubmit={handleUpdateProduct}/>
    </div>
</div>
  )
}

export default UpdateProduct
