import React from 'react'
import Image from 'next/image'  
import Link from 'next/link'

const BoxTextImg = ({ info }) => {
  return (
    <>
    {info.map((list, index) => (
      <div key={index} className='max-w-[1240px] m-auto my-auto flex justify-center items-center'>
          <div className='max-[970px]:text-center'>
            <h2 className='text-5xl font-bold font-title text-green-2'>{list.title}</h2>
            <p className='text-xl text-green-1 my-6'>{list.description}</p>
            <ul className='flex flex-wrap gap-2 mt-5 max-[970px]:justify-center'>
              {list.links.map((link, index) => (
                <li key={index} className='mt-4'>
                    <Link href={link.path}>
                      <a className='text-green-2 font-bold px-4 py-4 rounded-lg bg-blue-1 hover:text-white hover:bg-green-2 active:bg-green-3 focus:outline-none focus:ring focus:green-1 ease-in duration-300'>{link.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='max-[970px]:hidden'>
            <ul className='flex flex-wrap gap-2 justify-end'>
              {list.images.map((image, index) => (
                <li key={index} className={list.images.length == 5 && '[&:nth-child(1)]:self-end [&:nth-child(3)]:self-end'}>
                  <Image src={image.path} alt='Image' />
                </li>
                ))}
            </ul>
          </div>
      </div>
    ))}
    </>
  )
}

export default BoxTextImg