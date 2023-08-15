import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=' bg-blue-400  h-[88vh]'>
      
      <Link to='/quiz' className='flex  '>
        <button className=' start-btn bg-blue-100 mx-auto my-[19rem] px-5 py-3 rounded-lg '>
          Start Quiz
        </button>
      </Link>

    </div>
  )
}

export default Home
