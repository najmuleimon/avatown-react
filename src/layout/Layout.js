import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='mt-[58px]'>
          <Outlet/>
        </main>
    </>
  )
}

export default Layout;