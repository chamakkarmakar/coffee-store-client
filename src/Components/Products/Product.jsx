import React from 'react'
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Product = ({ product,handleDelete }) => {
  return (
    <div className='w-4/5 h-40 bg-coffee6 flex justify-between items-center'>
      <img className='h-40' src={product.photo} alt="" />
      <div className='text-sm'>
        <p><span className="font-bold">Name:</span> {product.name} </p>
        <p><span className="font-bold">Chef:</span> {product.chef} </p>
        <p><span className="font-bold">Price:</span> {product.price} </p>
      </div>
      <div className='pr-5'>
        <Link to={`/product/${product._id}`} className='block bg-orange px-2 py-1 mb-2'><IoEye className='w-5 h-5 text-white' /></Link>
        <Link to={`/update/${product._id}`} className='block bg-dark px-2 py-1 mb-2'><MdEdit className='w-5 h-5 text-white' /></Link>
        <button onClick={()=>handleDelete(product._id)} className='block bg-red px-2 py-1 mb-2'><MdDelete className='w-5 h-5 text-white' /></button>
      </div>
    </div>
  )
}

export default Product
