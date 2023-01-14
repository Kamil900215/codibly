import React from 'react'

export const Pagin = ({prevPage, nextPage}) => {
  return (
    <div>
        <div className='arrowContainer'>
            <div className='arrow' onClick={prevPage}>&#171;</div>
            <div className='arrow' onClick={nextPage}>&#187;</div>
        </div>
    </div>
  )
}
