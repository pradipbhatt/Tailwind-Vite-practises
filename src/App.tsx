import { useState } from 'react'
import './styles.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container">
          <div className="columns-1 border-sky-300 md:columns-3">
            <div className="w-full display-flex border bg-orange-800 hover:bg-slate-700 ">
              <div className='w-full bg-rose-700 md:bg-green-900 p-4'>i am container 1</div>
              <div className='w-full bg-rose-700 md:bg-green-900 p-4'>i am container 2</div>
              <div className='w-full bg-rose-700 md:bg-green-900 p-4'>i am container 3</div>
            </div>
          </div>
        </div>
        
       
        <div className="container">
          <div className="columns-1 w-fit md:columns-4">
            <img className='border-green-500' src="./src/assets/1.png" alt="" />
            <img className='border-green-500' src="./src/assets/1.png" alt="" />
            <img className='border-green-500' src="./src/assets/1.png" alt="" />
            <img className='border-green-500' src="./src/assets/1.png" alt="" />
            <br />
            <img className='border-green-500' src="./src/assets/2.png" alt="" />
            <img className='border-green-500' src="./src/assets/2.png" alt="" />
            <img className='border-green-500' src="./src/assets/2.png" alt="" />
            <img className='border-green-500' src="./src/assets/2.png" alt="" />
            
          </div>
        </div>
{/* aspect video */}
  
<iframe  className="bg-green-500 aspect-video border w-full"  src="https://www.youtube.com/embed/fKFpaQU4_Jw?si=TvoH5eNRKrZvzSKI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
watch me
</iframe>
   {/* aspect square */}
   <iframe  className="bg-green-500 aspect-square border w-full"  src="https://www.youtube.com/embed/fKFpaQU4_Jw?si=TvoH5eNRKrZvzSKI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
watch me
</iframe>
    </>
  )
}

export default App
