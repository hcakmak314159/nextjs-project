import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import {HiAtSymbol,HiFingerPrint} from 'react-icons/hi';
import {AiOutlinePhone} from 'react-icons/ai'
import {RxAvatar} from 'react-icons/rx';
import {useState} from 'react';
import {useFormik} from 'formik';
import { registerValidate } from '../lib/validate'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function register() {
  //The state that makes the password appear in the desired state
  const [show,setShow] =  useState({password:false,cpassword:false});
  //State holding value for phone number format
  const [value, setValue] = useState()
  console.log(value)
  const formik = useFormik({
    initialValues: {
      name:'',
      surname:'',
      phone:'',
      email: '',
      password:'',
      cpassword:''
    },
    validate:registerValidate,
    onSubmit:onSubmit
  
 });
 
 async function onSubmit(values) {
   console.log(values)
   
 }

  return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
          <div className='title'>
            <h1 className='text-gray-800 text-4xl font-bold py-4 text-left'>Hello!</h1>
            <p className=' mx-auto text-gray-400 text-left'>Sign Up to Get Started</p>
          </div>
          {/*form*/}
          <form className='flex flex-col gap-5 ' onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
              <input type='text'
              name='name'
              placeholder='Name'
              className={styles.input_text}
              {...formik.getFieldProps('name')}
              />
              
              <input type='text'
              name='surname'
              placeholder='Surname'
              className={styles.input_text}
              {...formik.getFieldProps('surname')}
              />
              
            </div>
            <div className={styles.input_group}>
              <PhoneInput
                className={styles.PhoneInputInput}
                name='phone'
                placeholder='Enter phone number'
                value={value}
                onChange={()=>setValue(value)}
                {...formik.getFieldProps('phone')}
                />
           
            </div>
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
     
              type={`${show.password?"text":"password"}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
              
              />
              <span className='icon flex items-center px-4' onClick={()=> setShow({...show,password:!show.password})}>
                <HiFingerPrint size={25}/>
              </span>
            </div>
            <div className={styles.input_group}>
              <input 
     
              type={`${show.cpassword?"text":"password"}`}
              name='cpassword'
              placeholder='Confirm Password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
              
              />
              <span className='icon flex items-center px-4' onClick={()=> setShow({...show,cpassword:!show.cpassword})}>
                <HiFingerPrint size={25}/>
              </span>
            </div>
            <div className='flex justify-between'>
              <div>
                <input  type='checkbox'></input><span className='px-1'>Keep me signed in</span>
              </div>
              
              
            </div>


            {/*Login buttons*/}
            <div className={styles.button}>
              <button type='submit'>
                Sign Up
              </button>
            </div>
            
          </form>

          {/* bottom */}
          <p className='text-center text-gray-400'>
            Already a user?  <Link href={'/login'}><span className='text-blue-700 font-semibold '>Login</span></Link>
          </p>
          {formik.errors.name && formik.touched.name ?<span className='text-red-400'>{formik.errors.name}</span>:<></>}
          {formik.errors.surname && formik.touched.surname ?<span className='text-red-400'>{formik.errors.surname}</span>:<></>}
          {formik.errors.email && formik.touched.email ?<span className='text-red-400'>{formik.errors.email}</span>:<></>}
          {formik.errors.password && formik.touched.password ?<span className='text-red-400'>{formik.errors.password}</span>:<></>}
          {formik.errors.cpassword && formik.touched.cpassword ?<span className='text-red-400'>{formik.errors.cpassword}</span>:<></>}

        </section>
    </Layout>
  )
}

export default register