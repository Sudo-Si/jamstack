import React from 'react'
import yarner from '../theyarn.png'
function Header() {
  return (
    <div>
    <div className='flex justify-between items-center
      border-y border-black py-10 lg:py-0 baq' >
      <div className='px-10 space-y-5'>
        <h1 className='text-6xl max-w-xl font-serif'>
        <span className='underline decoration-black decoration-4 '>theYarn</span> is a blog based in the beautiful Aotearoa!</h1>
        <p>The #1 Simon Maswabi Blog on the internet!</p>
     </div>
     <img src={yarner} alt="" className='hidden md:inline-flex lg:h-full' style={{height:250}}  />
    </div>
    </div>
  )
}

export default Header