import React from 'react'
import bane from "../bane.jpg"
function Home() {
  return (
    <main >    
        <img 
        src={bane} 
        alt="bane"
        className="absolute object-cover w-full h-full"
        />
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
            <div className=' w-1/2 bg-slate-50 '>
              <h1 className='flex justify-center text-6xl text-green-400 font-bold leading-none lg:leading-snug home-name '>Home</h1>
             
             <br/>
             {/* <h1 className='text-6xl text-green-400 font-bold leading-none lg:leading-snug home-name '>Home</h1> */}
           {/* <div className='border-2 w-1/2 flex justify-center '> */}
              <p className='rounded-lg flex justify-center text-lg text-green-800 bold bg-gray-800  p-8 '>Welcome to my personal tech blog! My name is Simon and I am a 3D printing enthusiast and web developer. On this blog, I'll be sharing my thoughts and experiences as I explore the exciting world of technology and its applications in everyday life. Whether I'm tinkering with my 3D printer or coding up a new website, I'm always looking for ways to learn and grow. I hope that by sharing my adventures in tech, I can inspire others to get involved and maybe even learn a thing or two along the way. So join me as I delve into the world of 3D printing and web development and discover all the amazing things that technology has to offer. Thanks for stopping by!</p>
              {/* <h1 className='text-6xl text-green-400 font-bold leading-none lg:leading-snug home-name '>Home</h1> */}
            {/* </div>   */}
           <a className='bg-gray-800 text-green-500 p-2 my-3' href="/post">posts</a> 
            </div> 
            
           
          
         </section>
    
    </main>

  )
}

export default Home