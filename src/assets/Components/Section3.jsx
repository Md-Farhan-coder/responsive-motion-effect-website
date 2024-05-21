import React from 'react'
import img8 from "/motionarteffect-img8.png";


const Section3 = () => {
  return (
    <> 
    <div className='flex flex-col text-center container-background-image border rounded-lg border-gray-600 md:mx-6 mx-2 gap-4 px-4 py-10 md:py-14'>
        <h2 className='text-2xl md:text-4xl'>Supported by All Popular Browsers
</h2>
<p className=''> Rest assured, Motion Art is designed to be <br /> compatible with all major web browsers.</p>
<div className="flex justify-center ">
    <img src={img8}  className='max-w-3xl w-auto h-auto overflow-y-auto' alt="" />

</div>
    </div>
    </>
   
  )
}

export default Section3