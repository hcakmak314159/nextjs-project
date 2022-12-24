import React from 'react'
import styles from '../styles/Layout.module.css';

function layout({children}) {
  return (
    <div className=' w-screen h-screen grid grid-rows-2  text-black md:grid-cols-2 '>
        <div className='flex flex-wrap content-center justify-center text-white w-full h-full bg-gradient-to-t  from-blue-900 via-blue-700 to-blue-400 md:h-screen'>
          <div>
          <h1 className='text-4xl font-bold'>PitonShop</h1>
          <h2 className='font-sans font-normal tracking-wide py-3'>The most popular book shop for IT</h2>
          </div>
          
        </div>  
        <div className='flex flex-wrap content-center justify-center w-full h-full bg-white md:h-screen'>
            <div className='text-center py-10'>
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default layout