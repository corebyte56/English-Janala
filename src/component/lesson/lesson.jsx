import React from 'react'
import LessonHeader from './lesson-header'
import LessonNum from './lesson-num'


const Lesson = () => {
  return (
    <div className='px-10 py-14 flex flex-col gap-10 items-center'>
      <LessonHeader />
      <LessonNum />
      
    </div>
  )
}

export default Lesson
