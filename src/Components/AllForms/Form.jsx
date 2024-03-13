import React from 'react'

const Form = ({handleSubmit}) => {
    console.log(handleSubmit);
    return (
        <form onSubmit={handleSubmit} className='grid md:grid-cols-2 grid-cols-1 gap-4 my-7'>

            <div>
                <label htmlFor="name" className='block text-coffee2 font-semibold'>Name</label>
                <input type="text" name="name" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee name' />
            </div>
            <div>
                <label htmlFor="chef" className='block text-coffee2 font-semibold'>Chef</label>
                <input type="text" name="chef" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee chef' />
            </div>
            <div>
                <label htmlFor="supplier" className='block text-coffee2 font-semibold'>Supplier</label>
                <input type="text" name="supplier" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee supplier' />
            </div>
            <div>
                <label htmlFor="price" className='block text-coffee2 font-semibold'>Price</label>
                <input type="text" name="price" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee price' />
            </div>
            <div>
                <label htmlFor="category" className='block text-coffee2 font-semibold'>Category</label>
                <input type="text" name="category" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee category' />
            </div>
            <div>
                <label htmlFor="details" className='block text-coffee2 font-semibold'>Details</label>
                <input type="text" name="details" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter coffee details' />
            </div>
            <div className='md:col-span-2'>
                <label htmlFor="photo" className='block text-coffee2 font-semibold'>Photo</label>
                <input type="url" name="photo" className='w-full rounded px-2 py-1 placeholder:text-coffee5 text-coffee4 outline-none' placeholder='Enter photo url' />
            </div>
            <input type="submit" value="Add Coffee" className='mt-3 md:col-span-2 py-1 bg-coffee4 text-white hover:text-coffee2 font-bold font-style rounded text-lg hover:bg-transparent outline-none border-2 border-coffee1 cursor-pointer' />
        </form>
    )
}

export default Form
