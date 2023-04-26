import {FiHeart} from 'react-icons/fi';
import {HiOutlineArrowUpOnSquare} from 'react-icons/hi2';
import {GrStar} from 'react-icons/gr';
import {products} from '../../data/products';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const singleProduct = products.find((product) => product.id === id);
    const {title, rating, likes, image, name, price, content, description} = singleProduct || {};
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-20'>
        <div>
            <img src={image} alt="Avatar" />
            <div className="flex items-center gap-2 my-2">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={image} alt="avatar" className='h-full w-full object-cover' />
                </div>
                <p className='text-gray font-medium text-[10px]'>{name}</p>
            </div>
        </div>

        <div className="md:col-span-2 xl:col-span-3">
            <h3 className='text-base xl:text-2xl font-medium text-black'>{title}</h3>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-1">
                    <ul className='flex items-center'>
                        {
                            [...Array(Math.ceil(rating))].map((item, i) => (
                                <li key={i}><GrStar className='text-[#F9AE3F] text-xl'/></li>
                            ))
                        }
                    </ul>
                    <p className='text-gray font-medium text-sm'>{rating} & {likes}Likes</p>
                </div>  
            </div>
            
            
            <h3 className='font-semibold text-black text-base xl:text-lg pb-1'>$ <span className='text-3xl'>{price.toFixed(2)}</span></h3>
            <div className="flex items-center gap-2">
                <span className='inline-block flex-shrink-0 h-4 w-4 rounded-full bg-sky'></span>
                <p className='font-medium text-[11px] text-black'>{content}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 py-2 my-2 border-y border-gray/50">
                <button type='button' className='py-2 px-10 w-full md:w-fit rounded-full bg-blue text-sm text-white font-medium'>Add To Cart</button>
                <button type='button' className='py-2 px-10 w-full md:w-fit rounded-full bg-[#FFA41C] text-sm text-white font-medium'>Buy Now</button>
            </div>
            <p className='pt-1 pb-2 font-medium text-sm text-black leading-4'>{description}</p>
            <div className="flex items-center gap-1">
                <button type='button'>
                    <FiHeart className='text-gray text-2xl'/>
                </button>
                <button type='button'>
                    <HiOutlineArrowUpOnSquare className='flex-shrink-0 text-2xl text-gray'/>
                </button>
            </div>

            <div className="mt-4">
                <p className='text-xs font-medium bg-[#4E9CD6] text-white w-fit py-1 px-3 block-title relative'>Great on Kindle</p>
                <div className="rounded bg-[#f4f4f4] rounded-tl-none p-4">
                    <h4 className='text-base font-semibold text-black pb-1'>Great Experience. Great Value. </h4>
                    <p className='text-sm font-medium text-black'>Enjoy a great reading experience when you buy the Kindle edition of this book. Learn more about Great on Kindle, available in select categories.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details