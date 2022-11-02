import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Dictionary from '../pages/Dictionary'
import Error404 from './Error404'
function Definition() {
  const [word, setWord] = useState()
  let { search } = useParams()
  const navigate = useNavigate()
  const [error404, setError404] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() =>{
    // const status = 401
    // const url = 'https://httpstat.us/' + status
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
    fetch(url)
    .then((response) => {
      if (response.status === 404){
        setError404(true)
      } else if (response.status === 401){
        navigate('/login')
      } else if (response.status === 500){
        setError(true)
      }

      if (!response.ok){
        setError(true)
        throw new Error('Something Didn\'t go well')
      }
      return response.json()
    })
    .then((data) => {
        setWord(data[0].meanings)
    })
    .catch((e) =>{
      console.log(e.message)
    })
  },[])
  

  if (error404 === true){
    return(
      <>
      <Error404 />
      <Link to='/dictionary'>Go back and search</Link>
      </>
    )
  }
  if (error === true){
    return(
      <>
      <h1> Something didn't go well </h1>
      <Link to='/dictionary'>Go back and search</Link>
      </>
    )
  }
  return (
    <>
        <div className='flex space-x-10'>
        <div className='border-dashed border-2 h-screen dictionary-half'>
        <Dictionary />
        </div>
        <div>
         {word ? (
         <>
         <h1>Meaning: </h1>

          {word.map((meaning) => {
              return <p key={uuidv4}>{meaning.partOfSpeech} : {meaning.definitions[0].definition}</p>
          })}
          </>
          )
          : 
        <p>Loading...</p>
        }
        </div>
        </div>
    </>
  )
}

export default Definition