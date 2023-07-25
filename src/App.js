import React from 'react'
import './styles/App.css'
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <PreNavbar/>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
      
  )
}

export default App
