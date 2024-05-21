import React from 'react'

import img6 from "/motionarteffect-img6.png";
import img7 from "/motionarteffect-img7.png";
import img9 from "/motionarteffect-img9.png";


const Section4 = () => {
  return (
    <>
    <div className="flex justify-center  flex-col items-center my-10 gap-5">
    <h2 className='text-4xl text-center w-full md:w-1/2'> An All-Round Plugin With  Powerful Features</h2>
   <p className='text-gray-400  text-center w-full md:w-1/2 '>
Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with  a seamless and intuitive experience.
  </p>
  </div>
  <div className="flex flex-wrap justify-center mt-10 ">

     {/* card 1  */}
    <div className="p-4  lg:max-w-96 w-full lg:w-1/2">
        <div className="flex justify-start rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-6 flex-col">
            <div className="flex justify-start">
                <img src={img9} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <h2 className='text-2xl font-medium pb-3'>100% Responsive</h2>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                
Create a consistent visual experience across all devices.
                </p>
                
            </div>
        </div>
    </div>

     {/* card 2  */}
     <div className="p-4  lg:max-w-96 w-full lg:w-1/2">
        <div className="flex justify-start rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-6 flex-col">
            <div className="flex justify-start">
                <img src={img6} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <h2 className='text-2xl font-medium pb-3'> Light Weight </h2>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                User Friendly Interface
Ensure a smooth experience for both applicants and administrators.
                </p>
                
            </div>
        </div>
    </div>

     {/* card 3  */}
     <div className="p-4 lg:max-w-96 w-full lg:w-1/2">
        <div className="flex justify-start rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-6 flex-col">
            <div className="flex justify-start">
                <img src={img7} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <h2 className='text-2xl font-medium pb-3'> User Friendly Interface
 </h2>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Ensure a smooth experience for both applicants and administrators.
                </p>
                
            </div>
        </div>
    </div>

</div>

  </>
  )
}

export default Section4