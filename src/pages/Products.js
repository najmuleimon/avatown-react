import AllProducts from '../components/products/AllProducts'
import Sidebar from '../components/products/Sidebar'

const Products = () => {
  return (
    <div className='container flex flex-col xs:flex-row items-start pb-12'>
      <Sidebar/>
      <AllProducts/>
    </div>
  )
}

export default Products