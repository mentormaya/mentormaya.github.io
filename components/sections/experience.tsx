import { resume } from '@/data/resume'
import { BriefcaseBusiness } from 'lucide-react'
import React from 'react'
import PingingDot from '../pinging-dot'

const Experience = () => {
  return (
    <section className="flex flex-col gap-4 bg-zinc-900/60 rounded p-6 border border-zinc-600/60">
      <div className="section-header flex gap-4 items-center text-2xl">
        <BriefcaseBusiness className="h-8 w-8 text-purple-600" />
        <h2 className="uppercase">Work Experience</h2>
      </div>
      <ul className="flex flex-col ml-2">
        {resume.workExperiences.map((work, index) => {
          return (
            <li className="flex items-center gap-8 relative py-4" key={index}>
              <div className="absolute h-full w-[2px] left-[5px] bg-slate-300/60"></div>
              <PingingDot />
              <div>
                <h3 className="uppercase text-purple-600">{work.title} <span className="capitalize ml-4 text-slate-300/60">{work.date}</span></h3>
                <p>{work.company}</p>
                <p className="text-slate-300/60">{work.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Experience