import {GrStar} from 'react-icons/gr';
import {FiHeart} from 'react-icons/fi';
import {HiOutlineArrowUpOnSquare} from 'react-icons/hi2';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {id, title, rating, likes, image, name, price, content, description} = product || {};

  return (
    <div className="rounded-lg overflow-hidden bg-white">
        <Link to={`/product/${id}`} className="w-full h-[250px] rounded-lg overflow-hidden block relative">
            <img src={image} alt="avatar" className='h-full w-full object-cover' />
            <button type='button' className="absolute top-[9px] right-[10px] z-20 flex items-center gap-1 text-white text-xs font-medium py-1 px-2 bg-blue rounded-lg">
                <MdOutlineAddShoppingCart className='text-base'/>
                Add
            </button>
        </Link>
        <div className="px-[5px] py-[2px]">
            <h3 className='text-base leading-[18px] font-medium text-black'>{title}</h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <ul className='flex items-center'>
                        {
                            [...Array(Math.ceil(rating))].map((item, i) => (
                                <li key={i}><GrStar className='text-[#F9AE3F] text-lg'/></li>
                            ))
                        }
                    </ul>
                    <p className='text-gray font-medium text-[11px]'>{rating} & {likes}Likes</p>
                </div>
                <button type='button'>
                    <FiHeart className='text-gray'/>
                </button>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="h-[21px] w-[21px] rounded-full overflow-hidden">
                <img src={image} alt="avatar" className='h-full w-full object-cover' />
            </div>
            <p className='text-gray font-medium text-[10px]'>{name}</p>
        </div>
        <h3 className='font-medium text-black text-[10px]'>$ <span className='text-xl'>{price.toFixed(2)}</span></h3>
        <div className="flex items-center gap-2">
            <span className='inline-block flex-shrink-0 h-4 w-4 rounded-full bg-sky'></span>
            <p className='font-medium text-[11px] text-black'>{content}</p>
        </div>
        <div className="flex items-center gap-1">
            <p className='py-1 font-medium text-[11px] text-black leading-4'>{description}</p>
            <button type='button'>
                <HiOutlineArrowUpOnSquare className='flex-shrink-0 text-2xl text-gray'/>
            </button>
        </div>
    </div>
  )
}

export default ProductCard