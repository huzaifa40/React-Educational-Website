import React from 'react'

const Title = (props) => {
  return (
    <div className='my-24'>
        <p className='font-[650] text-[16px] text-black'>{props.subTitle}</p>
        <p className='text-[32px] font-bold'>{props.title}</p>
    </div>
  )
}

export default Title
