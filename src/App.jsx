import React from 'react'
import NavBar from '../src/Components/NavBar'
import BestSellers from './Components/BestSellers'
import Collections from './Components/Collections'
import Hero from './Components/Hero'
import Newsletter from './Components/Newsletter'

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Collections />
      <BestSellers />
      <Newsletter />
    </div>
  )
}

export default App
