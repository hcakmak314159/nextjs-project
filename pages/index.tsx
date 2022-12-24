import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useSession,getSession,signOut } from "next-auth/react"


export default function Home() {
  
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