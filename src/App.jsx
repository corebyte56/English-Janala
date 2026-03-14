import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/navbar'
import Hero from './component/hero/hero'
import Lesson from './component/lesson/lesson'
import Question from './component/question/Question';
const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Lesson />
      <Question/>
    </div>
  )
}

export default App
