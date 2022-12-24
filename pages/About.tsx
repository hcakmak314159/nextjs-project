import React from 'react'

function About() {
  return (
    <div className='flex flex-col hover:flex-row'>
        <div><h1 className=''>Merhaba bu bir uygulamadır</h1></div>
        <div><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Giriş Yap</button></div>
        <div><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Çıkış Yap</button></div>
    
    </div>
    
  )
}

export default About