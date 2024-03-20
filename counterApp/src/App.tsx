import { useState } from 'react'
import HomeUpdate from './ourNewComponent'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className=" flex justify-center items-center  bg-slate-400 min-h-screen text-white font-serif">
        <div className='text-center space-y-2'>
          <h2 className='text-3xl'>Counter Application</h2>
          <div className='mt-2'>
            < HomeUpdate ourState={count} handleClick={handleClick} />

          </div>

        </div>

      </div>

    </>
  )
}

export default App
