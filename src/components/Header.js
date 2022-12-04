import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'
import img from '../theyarn.png'

function Header() {
  return (

    <header className=" flex justify-between p-5 max-w-7xl">
      <div className="flex items-center space-x-5">
        <NavLink href='/' >
         <img className="w-20 object-contain cursor-pointer"
         src={img} alt="s" />
        </NavLink> 
        
        <NavLink to="/post" className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-200 text-1xl">Blog </NavLink>
             
         <div className="hidden md:inline-flex item-center space-x-5">
      
      </div>
      </div>
     
      <div className='inline-flex '> 
                <SocialIcon url='https://github.com' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
                <SocialIcon url='https://www.linkedin.com/' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
                <SocialIcon url='https://www.instagram.com/' className='mr-4' target="_blank" fgColor='#fff'style={{height:35, width:35}} />
            </div>
    </header>
  )
}

export default Header;
