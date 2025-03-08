import React from 'react'
import Accordion from './components/accordian/Accordion'
import './App.css'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import StarRating from './components/StarRating/StarRating'

const App = () => {
  return (
    <>
    {/*Accordian*/}
    {/* <Accordion/>  */}

    {/* random color generator */}
    {/* <ColorGenerator/> */}

    {/* star rating */}
    <StarRating starCount={10}/>
    </>
  )
}

export default App