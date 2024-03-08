import React from 'react'
import about_icon from '../Assets/about.png'
import play_icon from '../Assets/play-icon.png'

const About = () => {
  return (
    <div className='about flex justify-center my-32'>
        <div className='w-[65%] flex gap-10 items-center'>
            <div className='relative' >
                <img src={about_icon} className='rounded-xl' alt="" />
                <img src={play_icon} className='absolute top-[45%] left-[45%] h-[65px] w-[65px]' alt="" />
            </div>  
            <div className=' text-start'>
                <p className='font-[600] text-[18px] text-blue-900'>ABOUT UNIVERSITY</p>
                <h1 className='text-blue-950 font-[700] text-[40px] leading-tight mb-3 mt-1'>Nurturing Tomorrow's Leaders Today</h1>
                <div className='flex flex-col gap-3 text-gray-600 font-[450] text-[17px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam 
                        veritatis esse quam laudantium, quod fugit quaerat voluptates officiis? 
                        Aspernatur soluta itaque cum laboriosam est quia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sunt necessitatibus ad quaerat voluptatum quia consequatur 
                        pariatur architecto earum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Necessitatibus aliquid non sit. Quisquam velit quas hic provident 
                        ad mollitia laborum ipsum cum aliquam, perferendis quaerat, 
                        tempora sunt et recusandae magni.
                    </p>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default About
