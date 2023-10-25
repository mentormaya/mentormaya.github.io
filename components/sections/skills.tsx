import React from "react";
import Image from "next/image";

import { resume } from "@/constants/info";
import { cn } from "@/helper/utils";
import { SectionHeading } from "@/components/sections/heading";

function Skills() {
  return (
    <section className="my-8">
      <SectionHeading title="My Skills and Technologies I love" />
      <div className="skill-set container my-8">
        <div className="m-auto flex justify-center items-center">
          <ul className="w-full flex justify-between flex-wrap">
            {resume.proffessional.skills.map(skill => {
              return (
                <li
                  className="w-1/2 grid grid-cols-[60px_1fr] justify-center items-center py-4 px-8"
                  key={skill.name}
                >
                  <div className="mr-2">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="skill-set__detail">
                    <div className="mb-[0.8rem] flex justify-between">
                      <div className="flex items-end">
                        <h4 className="text-2xl text-secondary-light tracking-[0.2em] leading-5 small-title--skill">
                          {skill.name}
                        </h4>
                        <p className="text-md leading-5 text-zinc-400 ml-[0.8rem] tracking-[0.2em]">
                          {skill.experience}
                        </p>
                      </div>
                      <p className="text-md text-[#ff4d5a] tracking-[0.2em] leading-5 small-title--skill">
                        {skill.rating}
                        <span className="">{skill.rating_unit ?? "%"}</span>
                      </p>
                    </div>
                    <div className="w-full h-2 bg-white rounded-md shadow-md">
                      <div
                        className={cn(
                          "h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] rounded-md"
                        )}
                        style={{ width: `${skill.rating}%` }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
