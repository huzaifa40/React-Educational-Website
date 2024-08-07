import React from 'react'
import campus_pic1 from '../Assets/gallery-1.png'
import campus_pic2 from '../Assets/gallery-2.png'
import campus_pic3 from '../Assets/gallery-3.png'
import campus from '../Assets/campus.webp'
import arrow from '../Assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus flex flex-col gap-20 my-20 z-0 inset-0 items-center'>
        <div>
            <p className='font-[650] text-[16px] text-black'>GALLERY</p>
            <p className='text-[32px] font-bold'>Campus Photos</p>
        </div>
        <div className='flex justify-center relative'>
            <div className='programs flex w-[65%] items-center gap-10'>
                <div className='program relative'>
                    <img src={campus_pic1} className='rounded-xl h-[280px] w-[500px]' alt="" />
                </div>

                <div className='program relative'>
                    <img src={campus_pic2} className='rounded-xl h-[280px] w-[500px]' alt="" />
                </div>                

                <div className='program relative'>
                    <img src={campus_pic3} className='rounded-xl h-[280px] w-[500px]' alt="" />                    
                </div>

                <div className='program relative'>
                    <img src={campus} className='rounded-xl h-[280px] w-[500px]' alt="" />
                </div>
            </div>
        </div>
        <button className='bg-black text-white border-white text-[17px] px-6 py-3 flex gap-4 rounded-3xl w-[210px] items-center'>Seee more here<img src={arrow} className='w-[20px] h-[12px] hover:rotate-90' alt="" /></button>
    </div>
  )
}

export default Campus
