import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
function Navbar() {
  return (
    <header className="bg-red-600 ">  
    <div className=''>
       
    </div>
         <div className="container mx-auto flex justify-between  "> 
            <nav className='items-center flex ml-8 '>
                <NavLink to="/" exact 
                className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-200 text-4xl font-bold cursive "
                 >Home</NavLink>
                <NavLink to="/about" className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-200 text-4xl">About Me</NavLink>
                <NavLink to="/post" className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-200 text-4xl">Blog </NavLink>
                <NavLink to="/project" className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-200 text-4xl">Projects </NavLink>
            </nav>
            <div className='inline-flex '> 
                <SocialIcon url='https://mrmaswabi.com' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
                <SocialIcon url='https://www.linkedin.com/in/othusitse-dalgleish-maswabi/' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
                <SocialIcon url='https://www.instagram.com/thosedudes_3d/' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
             
               
            </div>
        </div>
    </header>
  
   
   
  )
}

export default Navbar