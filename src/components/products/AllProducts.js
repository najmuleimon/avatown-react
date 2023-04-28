
import { useState } from 'react';
import ProductsHeader from './ProductsHeader';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import ReactPaginate from 'react-paginate';
import {IoChevronForwardSharp, IoChevronBackOutline} from 'react-icons/io5';

const AllProducts = () => {
  let itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='w-full'>
        <ProductsHeader/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[5px]">
            {
                currentItems.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        <ReactPaginate
          className="flex items-center justify-center pt-12 gap-2 pagination"
          activeClassName="activePage"
          breakLabel="..."
          nextLabel={<IoChevronForwardSharp className='text-2xl'/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<IoChevronBackOutline className='text-2xl'/>}
          renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default AllProducts