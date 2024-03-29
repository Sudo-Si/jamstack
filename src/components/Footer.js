import React from 'react'

function Footer() {
  return (
    <div>
      
<footer class="p-4 bg-[#030e12]  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ftr" >
    <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://mrmaswabi.com/" class="hover:underline">Developed by Simon Dalgleish-Maswabi</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        {/* <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li> */}
        <li>
            <a href="mailto:simon@mrmaswabi.com" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

    </div>
  )
}

export default Footer