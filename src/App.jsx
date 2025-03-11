import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Service from './Components/Service/Service'
import Package from './Components/Package/Packages'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Package />
      <Contact />
    </div>
  )
}

export default App