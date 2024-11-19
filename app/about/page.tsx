import About from '@/components/sections/about'
import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import React from 'react'

const AboutPage = () => {
  return (
    <main className='text-white rounded flex flex-col gap-8'>
      <About />
      <Experience />
      <Skills />
      <Education />
    </main>
  )
}

export default AboutPage