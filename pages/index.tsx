import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[session,setSession] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User():Guest()}
      
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

function User(){
  return(
    <main className='container mx-auto text-center py-20'>
        <h3 className='text-4xl font-bold'>Homepage</h3>
        <div className='flex justify-center'>
          <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-500'>Sign Out</button>

        </div>

        <div className='flex justify-center'>
          <Link href={'/profile'}><span className='mt-5px-10 py-1 rounded-sm bg-indigo-500 text-gray-400'>Sign In</span></Link>
        </div>
      </main>
  )
}