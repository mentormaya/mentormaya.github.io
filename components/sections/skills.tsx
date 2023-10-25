import React from "react";
import Image from "next/image";

import { resume } from "@/constants/info";
import { cn } from "@/helper/utils";
import { SectionHeading } from "@/components/sections/heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Skills() {
  return (
    <section className="my-8">
      <SectionHeading title="My Skills and Technologies I love" />
      <div className="skill-set container my-8 flex flex-col">
        <div className="m-auto flex justify-center items-center">
          <ul className="w-full flex justify-between flex-wrap">
            {resume.proffessional.skills.map(skill => {
              return (
                <li
                  className="w-1/2 grid grid-cols-[60px_1fr] justify-center py-4 px-8"
                  key={skill.name}
                >
                  <div className={cn("mr-4", skill.images && "mr-8")}>
                    {skill.images &&
                      skill.images.map((image, index) => (
                        <Image
                          key={image}
                          src={image}
                          alt={skill.name}
                          width={60}
                          height={60}
                          className={cn(
                            "rounded-full",
                            index === 1 && "-m-4 -rotate-45",
                            index === 2 && "-my-2 rotate-45"
                          )}
                        />
                      ))}
                    {skill.image && (
                      <Image
                        key={skill.image}
                        src={skill.image}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className={cn("rounded-full")}
                      />
                    )}
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
                    <div className="w-full h-2 bg-white rounded-md shadow-md cursor-pointer">
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
        <Button
          variant="ghost"
          className="m-auto text-secondary-light italic hover:bg-primary-light hover:bg-opacity-40 my-4"
          asChild
        >
          <div className="flex hover:shadow-md cursor-pointer">
            <ArrowRight className="h-4 w-4 cursor-pointer" />
            <Link href="/about">Come with me for detailed information!</Link>
          </div>
        </Button>
      </div>
    </section>
  );
}

export default Skills;
