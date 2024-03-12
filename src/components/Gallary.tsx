import  { Component } from 'react'

export default class Gallary extends Component {
  render() {
    return (
      <div>
        <div className="container-auto">
                <h1 className='container-auto text-center w-full text-3xl mb-5 rounded-md text-black
             '>Here's my Gallary</h1>
            <div className="columns sm:columns-1 md:columns-3">
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/1.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/2.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/3.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/4.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/5.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/6.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/7.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/8.png" alt="" />
                <img className='border p-5 hover:p-1 hover:bg-indigo-900 duration-500 rounded-full' src="./src/assets/9.png" alt="" />
            </div>
        </div>
      </div>
    )
  }
}
