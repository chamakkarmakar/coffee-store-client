import React from 'react'
import bgAdd from "../../assets/images/more/11.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
    const handleUpdateProduct = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const taste = event.target.taste.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;

        console.log(name,chef,supplier,taste,category,details,photo);

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
        <form onSubmit={handleUpdateProduct} className='grid md:grid-cols-2 grid-cols-1 gap-4 my-7'>

            <div>
                <label htmlFor="name" className='block text-coffee2 font-semibold'>Name</label>
                <input type="text" name="name" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee name'/>
            </div>
            <div>
                <label htmlFor="chef" className='block text-coffee2 font-semibold'>Chef</label>
                <input type="text" name="chef" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee chef'/>
            </div>
            <div>
                <label htmlFor="supplier" className='block text-coffee2 font-semibold'>Supplier</label>
                <input type="text" name="supplier" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee supplier'/>
            </div>
            <div>
                <label htmlFor="taste" className='block text-coffee2 font-semibold'>Taste</label>
                <input type="text" name="taste" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee taste'/>
            </div>
            <div>
                <label htmlFor="category" className='block text-coffee2 font-semibold'>Category</label>
                <input type="text" name="category" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee category'/>
            </div>
            <div>
                <label htmlFor="details" className='block text-coffee2 font-semibold'>Details</label>
                <input type="text" name="details" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee details'/>
            </div>
            <div className='md:col-span-2'>
                <label htmlFor="photo" className='block text-coffee2 font-semibold'>Photo</label>
                <input type="url" name="photo" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter photo url'/>
            </div>
            <input type="submit" value="Update Coffee Details" className='mt-3 md:col-span-2 py-1 bg-coffee4 text-white hover:text-coffee2 font-bold font-style rounded text-lg hover:bg-transparent outline-none border-2 border-coffee1 cursor-pointer' />
        </form>
    </div>
</div>
  )
}

export default UpdateProduct
