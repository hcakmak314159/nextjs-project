import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useSession,getSession,signOut } from "next-auth/react"
import {useEffect} from 'react';
import axios from 'axios'
import login from '../pages/login'

export default function Detail() {
  
  const { data: session } = useSession()

  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({session}):Guest()}
      
    </div>
  )
}

// Create a component for Non-token user (Guest) 

function Guest(){
  return(
    


    <main className='container mx-auto text-center py-20'>
        <h3 className='text-4xl font-bold'>Guest Homepage</h3>
        <div className='flex justify-center'>
          <Link href={'/login'}><span className='mt-5px-10 py-1 rounded-sm bg-indigo-500 text-gray-400'>Sign In</span></Link>
        </div>
      </main>
  )
}

// Create a component for Tokenize (Authorize) User

function User({session}){
  return(
    <div>
      <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href='/' className="flex items-center">
              <div className='flex items-center px-8 py-1.5 rounded-full bg-blue-600'>
                <h1 className='text-2xl font-normal text-white '>Piton</h1>
                <h1 className='text-2xl font-normal text-blue-200 text-opacity-100'>Shop</h1>
              </div>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <button onClick={()=>{signOut()}} className="flex flex-col w-32  justify-center   p-2.5 mt-4 border border-gray-100 rounded-full bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a className="block py-2 pl-3 pr-4 text-black font-semibold	 rounded-full md:bg-transparent md:p-0 dark:text-white" aria-current="page">Logout</a>
            </button>
          </div>
        </div>
      </nav>

      <div className='w-full flex  bg-gray-100 border border-gray-300 rounded-3xl shadow-md dark:bg-gray-800 dark:border-gray-700'>
        
          <div className="w-full p-10 ">
              <a href="#">
                  <img className="w-auto p-10" src="https://www.informit.com/ShowCover.aspx?isbn=0134671791" alt="" />
              </a>
           </div>   
              <div className="container p-5 ">
              <h1 className=' font-bold text-xl py-2 text-left text-gray-800 dark:text-gray-400'>The Art of Computer Programming</h1>  
                  <p className="mb-3 p-16 font-normals text-sm text-left text-gray-800 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  
                  <div className='inline-flex  px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href="#" className="w-full justify-center inline-flex text-2xl text-white items-center px-3 py-2  text-center font-semibold ">
                        35.00 ₺
                    </a>
                  </div>
                  
              </div>
          </div>

          
    </div>

    
      
      


  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }

  

  return{
    props:{session}
  }
  
}