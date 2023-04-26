import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import {IoNotificationsOutline} from 'react-icons/io5';
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import avatar from '../assets/images/avatar/img13.png';

const Header = () => {
  return (
    <header className='w-full bg-gradient-to-r from-primary to-secondary h-[58px] fixed top-0 left-0 z-40'>
        <div className="container flex items-center gap-3 justify-between h-full">
          <div className='flex items-end gap-4 xl:gap-12'>
              <Link to="/" className='w-[150px] sm:w-[200px]'>
                  <img src={logo} alt="Logo" className='w-full' /> 
              </Link>
              <Link to="/" className='text-white font-medium text-xs lg:text-[22px] underline hidden md:inline-block whitespace-nowrap mb-2'>Go to Marketpage</Link>
          </div>

          <div className="flex items-center gap-5">
            <label htmlFor="search" className='max-w-[411px] w-full h-[30px] bg-white rounded-[5px] overflow-hidden hidden md:flex items-center gap-2'>
              <input type="text" className='h-full w-full px-2 outline-none text-base text-black' />
              <button type='button' className='flex-shrink-0 text-gray text-lg mr-3'>
                <BiSearch/>
              </button>
            </label>
            <Link className='flex items-center justify-center h-8 w-8 rounded-lg bg-[#34353a] flex-shrink-0 relative'>
              <IoNotificationsOutline className='text-xl text-white'/>
              <span className='bg-[#df4949] h-4 w-4 rounded-full text-white flex items-center justify-center text-xs absolute -top-2 -right-2'>3</span>
            </Link>
            <Link className='flex items-center justify-center h-8 w-8 rounded-lg bg-[#34353a] flex-shrink-0 relative'>
              <HiOutlineShoppingCart className='text-xl text-white'/>
              <span className='bg-[#df4949] h-4 w-4 rounded-full text-white flex items-center justify-center text-xs absolute -top-2 -right-2'>1</span>
            </Link>
            <button type='button' className='flex items-center justify-center h-8 w-8 rounded-lg bg-[#34353a] flex-shrink-0 overflow-hidden'>
              <img src={avatar} alt="avatar" />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header