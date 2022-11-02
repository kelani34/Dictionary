import React from 'react'
import Dictionary from '../pages/Dictionary'

function Error404() {
  return (
    <>
        <div className='flex space-x-4'>
            <Dictionary />
            <div>Word not Found</div>
        </div>
    </>
  )
}

export default Error404