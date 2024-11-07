import { resume } from '@/data/resume'
import { GraduationCap } from 'lucide-react'
import React from 'react'
import PingingDot from '../pinging-dot'

const Education = () => {
  return (
    <section className="flex flex-col gap-4 bg-zinc-900/60 rounded p-6 border border-zinc-600/60">
      <div className="section-header flex gap-4 items-center text-2xl">
        <GraduationCap className="h-8 w-8 text-purple-600" />
        <h2 className="uppercase">Education/Qualifications</h2>
      </div>
      <ul className="flex flex-col ml-2">
        {resume.education.map((education, index) => {
          return (
            <li className="flex items-center gap-8 relative py-4" key={index}>
              <div className="absolute h-full w-[2px] left-[5px] bg-slate-300/60"></div>
              <PingingDot />
              <div>
                <h3 className="uppercase text-purple-600">{education.degree} <span className="capitalize ml-4 text-slate-300/60">{education.date}</span></h3>
                <p>{education.school}</p>
                <p className="text-slate-300/60">{education.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Education