import React from 'react'

const BoxTextImg = ( {info} ) => {
  return (
    <div>
        <div>
            <h2> {title} </h2>
            <p> {text} </p>
            <ul>
                {navBtns.map((btn, index) => (
                    <li key={index} className=''>
                        <a>{btn.name}</a>
                    </li>
                ))}
          </ul>
        </div>
        <div>
            <ul>
                {navImgs.map((img, index) => (
                    <li key={index} className=''>
                       {img.url}
                    </li>
                ))}
          </ul>
        </div>
    </div>
  )
}

export default BoxTextImg