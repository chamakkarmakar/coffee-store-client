import React, { useEffect, useState } from 'react'
import bgProduct from "../../assets/images/more/1.png"
import { FaCoffee } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allCoffee')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleDelete = id => {
    
    fetch(`http://localhost:5000/allCoffee/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const remainingCoffee = products.filter(product=>product._id !== id)
        setProducts(remainingCoffee)
      })
  }
  return (
    <div className='mt-20 mb-32 bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${bgProduct})` }}>
      <div className='text-center text-coffee1'>
        <small>--- Sip & Savor ---</small>
        <h1 className='text-4xl font-bold font-style'>Our Popular Products</h1>
        <button className='bg-coffee5 hover:bg-transparent my-4 py-1 px-3 rounded font-semibold border-2 border-coffee1 font-style'>
          <Link to="/add"> Add Coffee <FaCoffee className='inline w-5 h-5' /></Link>
        </button>
      </div>

      <div className="md:w-9/12 mx-auto">
        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10'>
          {
            products.map(product =>
              <Product key={product._id} product={product} handleDelete={handleDelete} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Products
