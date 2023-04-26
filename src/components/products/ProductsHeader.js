import React from 'react'

const ProductsHeader = () => {
  return (
    <div className="flex items-center justify-between pt-4 pb-1 w-full">
        <h2 className='text-[22px] font-medium text-black'>All items</h2>

        <label htmlFor="select" className='relative w-fit'>
            <select id='select' className='bg-white rounded border border-gray px-2 appearance-none text-black font-medium text-xs h-5'>
                <option value="0">Featured</option>
                <option value="1">Price: Low to High</option>
                <option value="2">Price: High to Low</option>
                <option value="3">Customer Review</option>
                <option value="4">New</option>
                <option value="5">Polygon:Low to High</option>
                <option value="6">Polygon:High to Low</option>
            </select>
            <span className='arrow absolute top-1/2 -translate-y-1/2 right-2'></span>
        </label>
    </div>
  )
}

export default ProductsHeader