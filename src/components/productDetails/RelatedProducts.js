import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const RelatedProducts = () => {
  return (
    <div className='border-t border-gray/50 mt-10'>
        <h2 className='text-xl font-semibold text-black py-5'>Products related to this item</h2>
        <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper mb-10"
            slidesPerView={1}
              allowTouchMove={false}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1500: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={5}
        >
            {
                products.map((product) => (
                    <SwiperSlide>
                        <ProductCard key={product.id} product={product}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default RelatedProducts