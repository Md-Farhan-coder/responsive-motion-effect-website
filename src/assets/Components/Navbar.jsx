import React from 'react'
import logo from "/MotionArtEffect-logo.png";


const Navbar = () => {
  return (
    <nav class=" border-gray-200 sticky px-10">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
				<a
					href="https://flowbite.com/"
					class="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src={logo}
						class="h-10"
						alt="Flowbite Logo"
					/>
				
				</a>
				
				<button type="button" class="hover:border-white focus:outline-none  bg-white hover:bg-transparent hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white font-medium rounded-lg text-sm px-16 py-4 me-2 mb-2 border-white  text-black   hover:text-white  ">Purchase Now</button>

			</div>
		</nav>
  )
}

export default Navbar