import React from 'react'
import back_icon from '../Assets/back-icon.png'
import next_icon from '../Assets/next-icon.png'
import user_1 from '../Assets/user-1.png'
import user_2 from '../Assets/user-2.png'
import user_3 from '../Assets/user-3.png'
import user_4 from '../Assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider = useRef()
    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBckward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonial relative my-28 mx-40 px-20'>
        <img src={back_icon} className='p-3 w-[45px] h-[44px] bg-blue-950 rounded-full absolute left-0 top-[50%] transform translate-y-[-50%]' alt="" onClick={slideBckward} />
        <img src={next_icon} className='p-3 w-[45px] h-[44px] bg-blue-950 rounded-full absolute right-0 top-[50%] transform translate-y-[-50%]' alt="" onClick={slideForward} />
        <div className='slider overflow-hidden'>
            <ul className='flex gap-6 overflow-x-hidden w-[200%] transition duration-700 ease-in-out' ref={slider}>
                <li className=''>
                    <div className='slide bg-gray-100 py-12 px-8 rounded-xl '>
                        <div className='user_info flex gap-3 items-center mb-3'>
                            <img src={user_1} className='rounded-full w-[70px] border-[4px] border-blue-950' alt="" />
                            <div>
                                <p className='font-[700] text-[20px] text-blue-950'>Emily Williams</p>
                                <p className='text-left text-gray-500 text-[17px] font-[600]'>Edusity, USA</p>
                            </div>
                        </div>
                        <p className='text-left text-gray-500 text-[17px] font-[600]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Debitis aliquid ea nemo dicta consequuntur blanditiis 
                            perferendis nostrum aspernatur explicabo delectus, cum placeat v
                            elit ut deserunt eos ducimus eveniet, porro rerum?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide bg-gray-100 py-12 px-8 rounded-xl '>
                        <div className='user_info flex gap-3 items-center mb-3'>
                            <img src={user_2} className='rounded-full w-[70px] border-[4px] border-blue-950' alt="" />
                            <div>
                                <p className='font-[700] text-[20px] text-blue-950'>William Jackson</p>
                                <p className='text-left text-gray-500 text-[17px] font-[600]'>Edusity, USA</p>
                            </div>                            
                        </div>
                        <p className='text-left text-gray-500 text-[17px] font-[600]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Debitis aliquid ea nemo dicta consequuntur blanditiis 
                            perferendis nostrum aspernatur explicabo delectus, cum placeat v
                            elit ut deserunt eos ducimus eveniet, porro rerum?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide bg-gray-100 py-12 px-8 rounded-xl '>
                        <div className='user_info flex gap-3 items-center mb-3'>
                            <img src={user_3} className='rounded-full w-[70px] border-[4px] border-blue-950' alt="" />
                            <div>
                                <p className='font-[700] text-[20px] text-blue-950'>William Jackson</p>
                                <p className='text-left text-gray-500 text-[17px] font-[600]'>Edusity, USA</p>
                            </div>
                        </div>
                        <p className='text-left text-gray-500 text-[17px] font-[600]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Debitis aliquid ea nemo dicta consequuntur blanditiis 
                            perferendis nostrum aspernatur explicabo delectus, cum placeat v
                            elit ut deserunt eos ducimus eveniet, porro rerum?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide bg-gray-100 py-12 px-8 rounded-xl '>
                        <div className='user_info flex gap-3 items-center mb-3'>
                            <img src={user_4} className='rounded-full w-[70px] border-[4px] border-blue-950' alt="" />
                            <div>
                                <p className='font-[700] text-[20px] text-blue-950'>William Jackson</p>
                                <p className='text-left text-gray-500 text-[17px] font-[600]'>Edusity, USA</p>
                            </div>
                        </div>
                        <p className='text-left text-gray-500 text-[17px] font-[600]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Debitis aliquid ea nemo dicta consequuntur blanditiis 
                            perferendis nostrum aspernatur explicabo delectus, cum placeat v
                            elit ut deserunt eos ducimus eveniet, porro rerum?
                        </p>
                    </div>
                </li>
            </ul>
        </div>       
    </div>  
  )
}

export default Testimonials
