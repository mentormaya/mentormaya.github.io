import { resume } from '@/data/resume'
import { PocketKnife } from 'lucide-react'
import React from 'react'

const Skills = () => {
  return (
    <section className="flex flex-col gap-4 bg-zinc-900/60 rounded p-6 border border-zinc-600/60">
      <div className="section-header flex gap-4 items-center text-2xl">
        <PocketKnife className="h-8 w-8 text-purple-600" />
        <h2 className="uppercase text-purple-600">Skills</h2>
      </div>
      <div className="grid grid-cols-3 ml-2 gap-2">
        {resume.skills.map((skill, index) => {
          return (
            <div className="flex flex-col justify-center rounded p-4 border border-zinc-600/60" key={index}>
              <div className="flex items-center gap-4">
                <span className="text-slate-300/60">{skill.percentage}%</span>
                <div className="w-full h-2 bg-slate-300/60 rounded-full">
                  <div className="h-full bg-slate-300/80 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
              <h3 className="uppercase text-purple-600">{skill.label}</h3>
              <p className="text-slate-300/60 text-justify">{skill.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills