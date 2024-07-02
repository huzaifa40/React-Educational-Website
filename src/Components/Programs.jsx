import React from 'react'
import program_1 from '../Assets/program-1.png'
import program_2 from '../Assets/program-2.png'
import program_3 from '../Assets/program-3.png'
import program_icon1 from '../Assets/program-icon-1.png'
import program_icon2 from '../Assets/program-icon-2.png'
import program_icon3 from '../Assets/program-icon-3.png'
import grad_1 from '../Assets/grad_1.webp'
import grad_2 from '../Assets/grad_2.avif'
import '../Components/Programs.css'

const programs = () => {
  return (
    <div className='flex flex-col gap-20 my-20 z-0 inset-0'>
        <div>
            <p className='font-[650] text-[16px] text-black'>OUR PROGRAMS</p>
            <p className='text-[32px] font-bold'>That We Offer</p>
        </div>
        <div className='flex justify-center relative'>
            <div className='programs flex w-[65%] items-center gap-10'>
                <div className='program relative'>
                    <img src={grad_2} className='rounded-xl h-[348px] w-[700px]' alt="" />
                    <div className='caption'>
                        <p className='text-white font-[550] text-xl'>Diploma</p>
                    </div>
                </div>

                <div className='program relative'>
                    <img src={grad_1} className='rounded-xl h-[348px] w-[700px]' alt="" />
                    <div className='caption '> 
                        <p className='text-white font-[550] text-xl'>Graduation Degree</p>
                    </div>
                </div>                

                <div className='program relative'>
                    <img src={program_3} className='rounded-xl h-[348px] w-[700px]' alt="" />
                    <div className='caption '>
                        <p className='text-white font-[550] text-xl'>Master's Degree</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default programs
