import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dictionary() {
    const [word, setWord] = useState()
    const navigate = useNavigate()
  return (

    <>
    <form className='flex flex-col w-max'>
        <input 
            className='shrink bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type='text'
            onChange={(e) =>{setWord(e.target.value)}}
        />
        <button 
        className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2'
        onClick={() =>{
            navigate('/definition/' + word, {replace: true})
        }}>search</button>
        </form>
    </>
  )
}

export default Dictionary