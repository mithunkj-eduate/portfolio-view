import React, { useState } from 'react'
import studentData from './studentData'
import Hero from './Hero'

const Student = () => {
  const [darkMode,onToggleDark] = useState(false)
  const data = studentData
  return (
    <>
      <Hero data={data} darkMode={darkMode} onToggleDark={onToggleDark} />
    </>
  )
}

export default Student
