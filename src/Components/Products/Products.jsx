import React, { useEffect, useState } from 'react'
import bgProduct from "../../assets/images/more/1.png"
import productImg from "../../assets/images/1.png"
import { FaCoffee } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('coffeeProducts.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='mt-20 mb-32 bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${bgProduct})` }}>
      <div className='text-center text-coffee1'>
        <small>--- Sip & Savor ---</small>
        <h1 className='text-4xl font-bold font-style'>Our Popular Products</h1>
        <button className='bg-coffee5 hover:bg-transparent my-4 py-1 px-3 rounded font-semibold border-2 border-coffee1 font-style'>
          Add Coffee <FaCoffee className='inline w-5 h-5' />
          </button>
      </div>

      <div className="md:w-9/12 mx-auto">
        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10'>
          {
            products.map(product =>
              <div key={product.id} className='w-4/5 h-40 bg-coffee6 flex justify-between items-center'>
                <img className='h-40' src={productImg} alt="" />
                <div className='text-sm'>
                  <p><span className="font-bold">Name:</span> {product.product_name} </p>
                  <p><span className="font-bold">Chef:</span> {product.chef} </p>
                  <p><span className="font-bold">Price:</span> {product.price} </p>
                </div>
                <div className='pr-5'>
                  <button className='block bg-orange px-2 py-1 mb-2'><IoEye className='w-5 h-5 text-white' /></button>
                  <button className='block bg-dark px-2 py-1 mb-2'><MdEdit className='w-5 h-5 text-white' /></button>
                  <button className='block bg-red px-2 py-1 mb-2'><MdDelete className='w-5 h-5 text-white' /></button>
                </div>
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Products
