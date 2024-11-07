import { about } from '@/data/about'
import React from 'react'
import { angelina } from "@/components/local-fonts";
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center border border-zinc-500/60 rounded p-8">
      <h1 className={cn(angelina.className, "text-4xl font-bold capitalize leading-[4rem] mb-4 text-purple-500")}>{about.title}</h1>
      <p className="text-xl text-muted-foreground mb-4 text-center text-balance tracking-wider">
        {about.quote}
      </p>
      <div className="flex my-8 px-8 w-full justify-between">
        {about.highlights.map((highlight, index) => (
          <div className="px-8 border-l border-purple-500" key={index}>
            <h2 className="text-3xl leading-10 mb-2">{highlight.label}</h2>
            <p className="text-md text-muted-foreground">{highlight.description}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-8 text-justify text-muted-foreground leading-6">
        <p>
          {about.description}
        </p>
      </div>
    </section>
  )
}

export default About