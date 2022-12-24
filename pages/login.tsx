import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import {HiAtSymbol,HiFingerPrint} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc';
import {useState} from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


function login() {
  //The state that makes the password appear in the desired state
  const [show,setShow] =  useState(false);

  return (
    <Layout>
        <Head>
            <title>Login</title>
        </Head>
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
          <div className='title'>
            <h1 className='text-gray-800 text-4xl font-bold py-4'>Hello Again!</h1>
            <p className='w-3/4 mx-auto text-gray-400'>Welcome to the PitonShop application where you can view the most popular books on IT</p>
          </div>
          {/*form*/}
          <form className='flex flex-col gap-5'>
            <div className={styles.input_group}>
              <input type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
              />
              <span className='icon flex items-center px-4'>
                <HiAtSymbol size={25}/>
              </span>
            </div>
            <div className={styles.input_group}>
              <input 
     
              type={`${show?"text":"password"}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              
              />
              <span className='icon flex items-center px-4' onClick={()=> setShow(!show)}>
                <HiFingerPrint size={25}/>
              </span>
            </div>
            <div className='flex justify-between'>
              <div>
                <input  type='checkbox'></input><span className='px-1'>Keep me signed in</span>
              </div>
              <div>
                <Link href={'/forgot'}>
                  <span className='text-blue-700 font-semibold '>Forgot password?</span>
                </Link>
            
            </div>
              
            </div>


            {/*Login buttons*/}
            <div className={styles.button}>
              <button type='submit'>
                Login
              </button>
            </div>

            {/* Google Auth */}
            {/* Facebook Auth */}
            {/* Github Auth */}
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <span className='text-center font-light mx-4 mb-0 text-gray-400'>Or</span>
            </div>
            <div className='flex justify-center gap-4'>
              <button><FcGoogle size={30}/></button>
              <button><AiFillGithub size={30}/></button>
              <button><BsFacebook color={'#3b5998'} size={25}/></button>
            </div>

            
            
          </form>

          {/* bottom */}
          <p className='text-center text-gray-400'>
            Don't have a account yet? <Link href={'/register'}><span className='text-blue-700 font-semibold '>Sign Up</span></Link>
          </p>

        </section>
    </Layout>
  )
}

export default login