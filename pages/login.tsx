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
import { signIn } from "next-auth/react"
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { useSession,getSession,signOut } from "next-auth/react"

function login() {

  const router = useRouter()
  const [navigate,setNavigate] = useState(false);

  
  const formik = useFormik({
     initialValues: {
       email: '',
       password:''
     },
     
     onSubmit:onSubmit
   
  });

  
  async function onSubmit(values) {
    const status = await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password,
      callbackUrl:'/'
    })
    if(status.ok){
      router.push(status.url)
    }
    if(status?.error){
      console.log(error);
    }
  }
 
   
  


  //The state that makes the password appear in the desired state
  const [show,setShow] =  useState(false);
  // Google Handler Function
  async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }
  // Github Auth Function
  async function handleGithubSignin() {
    signIn('github',{callbackUrl:"http://localhost:3000"})
  }


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
          <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
            <div className={styles.input_group}>
              <input type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
              {...formik.getFieldProps('email')}
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
              {...formik.getFieldProps('password')}
              
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
              <button type='button' onClick={handleGoogleSignin}><FcGoogle size={30}/></button>
              <button type='button' onClick={handleGithubSignin}><AiFillGithub size={30}/></button>
              <button><BsFacebook color={'#3b5998'} size={25}/></button>
            </div>

            
            
          </form>

          {/* bottom */}
          <p className='text-center text-gray-400'>
            Don't have a account yet? <Link href={'/register'}><span className='text-blue-700 font-semibold '>Sign Up</span></Link>
          </p>
          {formik.errors.email && formik.touched.email ?<span className='text-red-400'>{formik.errors.email}</span>:<></>}
          {formik.errors.password && formik.touched.password ?<span className='text-red-400'>{formik.errors.password}</span>:<></>}

        </section>
    </Layout>
  ) 

}


export default login