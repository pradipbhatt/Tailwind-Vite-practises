import './styles.css'
import React, { useEffect, useState } from 'react';
import Navmain from './components/Navmain';
import Foot from './components/Foot'
import Gallary from './components/Gallary';



function App() {
  
  return (
    <>
 
<Navmain />
{/* <Intro/> */}
<Gallary/>
<Foot />
    </>
  )
}

export default App
