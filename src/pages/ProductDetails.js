import Breadcrumb from '../components/productDetails/Breadcrumb'
import Details from '../components/productDetails/Details'
import RelatedProducts from '../components/productDetails/RelatedProducts'
import Reviews from '../components/productDetails/Reviews'

const ProductDetails = () => {
  return (
    <div className='container'>
      <Breadcrumb/>
      <Details/>
      <RelatedProducts/>
      <Reviews/>
    </div>
  )
}

export default ProductDetails