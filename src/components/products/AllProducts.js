
import ProductsHeader from './ProductsHeader';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const AllProducts = () => {
  return (
    <div className='w-full'>
        <ProductsHeader/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[5px]">
            {
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default AllProducts