'use client'
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState (false)

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className='text-center'>
      <h1 className='text-4xl font-bold text-blue-900 mb-4'>
        Welcome to my website
      </h1>
      <p className='text-xl text-gray-700 mb-8'>
        This is my first web app
      </p>
      {clicked ? (
        <p className='text-2xl text-green-600 font-bold'>
          Siga Dol
        </p>
      ) : (
       <button
       onClick={() => setClicked (true)}
       className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition colors'>
        Click Me Dol
      </button>
  )}
      </div>
    </div>
  )
}