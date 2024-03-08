import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='mt-20 mb-8 w-[80%] flex flex-col gap-3'>
            <div>
                <p className='mx-auto border-t-2 border-black'></p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[18px] font-[500] text-black'>© 2024 Edusity. All rights reserved.</p>
                </div>
                <div className='flex gap-4'>
                    <p className='text-[18px] font-[500] text-black'>Terms of Services</p>
                    <p className='text-[18px] font-[500] text-black'>Privacy Policy</p>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer
