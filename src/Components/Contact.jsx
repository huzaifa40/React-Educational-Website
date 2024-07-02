import React from 'react'
import email_icon from '../Assets/mail-icon.png'
import call_icon from '../Assets/phone-icon.png'
import location_icon from '../Assets/location-icon.png'
import message_icon from '../Assets/msg-icon.png'
import arrow from '../Assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact flex justify-center'>
        <div className='flex w-[65%] gap-16'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                    <h5 className='text-[28px] font-[630] text-black'>Send us a message</h5>
                    <img src={message_icon} className='w-[36px] h-[28px]' alt="" />
                </div>
                <p className='text-left font-[400] text-gray-700 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus iste quasi iure sequi sit quo error laboriosam 
                    sapiente nulla porro et incidunt saepe neque obcaecati quibusdam 
                    accusantium, velit fugit in!</p>
                <div className='flex gap-4'>
                    <img src={email_icon} className='w-[28px] h-[22px]' alt="" />
                    <p className='font-[400] text-gray-700 text-[18px]'>Huzaifaahsan0301@gmail.com</p>
                </div>
                <div className='flex gap-4'>
                    <img src={call_icon} className='w-[28px] h-[28px]' alt="" />
                    <p className='font-[400] text-gray-700 text-[18px]'>+923012691055</p>
                </div>
                <div className='flex gap-4'>
                    <img src={location_icon} className='w-[28px] h-[36px]' alt="" />
                    <p className='font-[400] text-gray-700 text-[18px]'>Karachi, Pakistan</p>
                </div>
            </div>
            <div>
                <form action="" className='flex flex-col gap-3 items-center '>
                    <div className='flex flex-col gap-1 items-start'>
                        <label className='font-[400] text-gray-700 text-[17px]'>Your name</label>
                        <input className='bg-gray-100 px-5 py-3 rounded-lg w-[390px]' type="text" name='name' placeholder='Enter your name' required/>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <label className='font-[400] text-gray-700 text-[17px]'>Phone number</label>
                        <input className='bg-gray-100 px-5 py-3 rounded-lg w-[390px]' type="number" name='number' placeholder='Enter your mobile number' required/>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <label className='font-[400] text-gray-700 text-[17px]'>Your Email</label>
                        <input className='bg-gray-100 px-5 py-3 rounded-lg w-[390px]' type="email" name='email' placeholder='Enter your email' required/>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <label className='font-[400] text-gray-700 text-[17px]'>Write your message here</label>
                        <textarea className='bg-gray-100 px-5 py-3 rounded-lg w-[390px]' name='message' rows='5' placeholder='Enter your message' required/>
                    </div>     
                    <button className='flex gap-3 bg-black items-center text-white rounded-3xl w-[185px] py-3 px-6 text-[18px] font-[480] my-6'>Submit Now <img src={arrow} className='w-[25px] h-[15px]' alt="" /></button>          
                </form>
            </div>      
        </div>
    </div>
  )
}

export default Contact
