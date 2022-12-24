import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import {HiAtSymbol,HiFingerPrint} from 'react-icons/hi';
import {AiOutlinePhone} from 'react-icons/ai'
import {RxAvatar} from 'react-icons/rx';
import {useState} from 'react';

function register() {
  //The state that makes the password appear in the desired state
  const [show,setShow] =  useState(false);

  return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
          <div className='title'>
            <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
            <p className='w-3/4 mx-auto text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          {/*form*/}
          <form className='flex flex-col gap-5'>
          <div className={styles.input_group}>
              <input type='text'
              name='Name'
              placeholder='Name'
              className={styles.input_text}
              />
              
              <input type='text'
              name='Surname'
              placeholder='Surname'
              className={styles.input_text}
              />
              
            </div>
            <div className={styles.input_group}>
              <input type='phone'
              name='Phone'
              placeholder='Phone Number'
              className={styles.input_text}
              />
              <span className='icon flex items-center px-4'>
                <AiOutlinePhone size={25}/>
              </span>
            </div>
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
            
          </form>

          {/* bottom */}
          <p className='text-center text-gray-400'>
            Don't have a account yet? <Link href={'/register'}><span className='text-blue-700 font-semibold '>Sign Up</span></Link>
          </p>

        </section>
    </Layout>
  )
}

export default register