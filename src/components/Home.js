import React from 'react'
import bane from "../bane.jpg"
function Home() {
  return (
    <main >    
        <img 
        src={bane} 
        className="absolute object-cover w-full h-full"
        />
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
            
        <h1 className='text-6xl text-green-400 font-bold leadind-none lg:leading-snug home-name '>Home</h1>
        </section>
    
    </main>

  )
}

export default Home