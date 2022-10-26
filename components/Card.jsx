import React from 'react'
import Image from 'next/image'

const Card = ({ title, description, image }) => {
  return (
    <div className='max-w-[300px] bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] p-10 rounded-md'>
        <Image src={image} alt='Image' />
        <h3 className='text-2xl text-green-2 font-bold'>{title}</h3>
        <p className='text-base text-green-1'>{description}</p>
    </div>
  )
}

export default Card