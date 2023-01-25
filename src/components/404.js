import React from 'react'
import img from '../assets/yrnr.png'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='py-auto'>
        <div className='w-1/2 mx-auto mt-10 py-0 px-10 '>
            <h1 className='text-center font-bold text-2xl mt-0'>404: Nothing Here!</h1>
       
                    <img className='3/4 ' src={img} alt="logo"/>
         </div>
        <Link to="/"> <h1 className='text-center font-bold text-2xl mt-0'>Go Home!</h1></Link>
        </div>
  )
}

export default NotFound