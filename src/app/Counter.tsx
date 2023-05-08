'use client';
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <main className="flex flex-row gap-2 m-2">
    <button onClick={() => setCount(count + 1)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      +
    </button>
   
   
    <input value={count} onChange={(e) => setCount(count+1)}type="number"className="block rounded-md border-0 py-1.5 text-gray-900 p-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    <button onClick={() => setCount(count - 1)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">-</button>
  
    <p>{count}</p>
  </main>
  )
}

export default Counter
