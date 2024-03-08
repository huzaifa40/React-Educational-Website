import React from 'react'
import program_1 from '../Assets/program-1.png'
import program_2 from '../Assets/program-2.png'
import program_3 from '../Assets/program-3.png'
import program_icon1 from '../Assets/program-icon-1.png'
import program_icon2 from '../Assets/program-icon-2.png'
import program_icon3 from '../Assets/program-icon-3.png'
import '../Components/Programs.css'

const programs = () => {
  return (
    <div className='flex flex-col gap-20 my-20 z-0 inset-0'>
        <div>
            <p className='font-[650] text-[16px] text-blue-900'>OUR PROGRAM</p>
            <p className='text-[32px] font-bold'>What We Offer</p>
        </div>
        <div className='flex justify-center relative'>
            <div className='programs flex w-[65%] items-center gap-10'>
                <div className='program relative'>
                    <img src={program_1} className='rounded-xl' alt="" />
                    <div className='caption'>
                        <img src={program_icon1} className='w-[50px] h-[70px]' alt="" />
                        <p className='text-white font-[550]'>Graduation Degree</p>
                    </div>
                </div>

                <div className='program relative'>
                    <img src={program_2} className='rounded-xl' alt="" />
                    <div className='caption '> 
                        <img src={program_icon2} className='w-[50px] h-[70px]' alt="" />
                        <p className='text-white font-[550]'>Master's Degree</p>
                    </div>
                </div>                

                <div className='program relative'>
                    <img src={program_3} className='rounded-xl' alt="" />
                    <div className='caption '>
                        <img src={program_icon3} className='w-[50px] h-[70px]' alt="" />
                        <p className='text-white font-[550]'>Post Graduation Degree</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default programs
