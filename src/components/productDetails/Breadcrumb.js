import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <ul className='flex items-center breadcrumb pt-5 pb-4'>
        <li>
            <Link to="/" className='text-sm font-medium text-black'>Products</Link>
        </li>
        <li>
            <p className='text-sm font-medium text-black'>Product Details</p>
        </li>
    </ul>
  )
}

export default Breadcrumb