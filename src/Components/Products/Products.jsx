import React, { useEffect, useState } from 'react'
import bgProduct from "../../assets/images/more/1.png"
import { FaCoffee } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Product from './Product';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2'


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/allCoffee')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure to delete this coffee?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allCoffee/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              const remainingCoffee = products.filter(product => product._id !== id)
              setProducts(remainingCoffee)
            }
          })

      }
    });
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
    {
      loading ? <Loading /> :
        <div className="md:w-9/12 mx-auto">
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10'>
            {
              products.map(product =>
                <Product key={product._id} product={product} handleDelete={handleDelete} />
              )
            }
          </div>
        </div>
    }


  </div>
)
  }

export default Products
