---
title: Resume
permalink: /resume
layout: page
script: resume
---

<main class="flex flex-1 gap-4">
  <div
    class="flex flex-col w-[35%] max-w-[24rem] items-center bg-zinc-900/60 rounded p-4 border border-zinc-600/60">
    {%- include sections/person.html -%}
    {%- include components/divider.html -%}
    {%- include sections/profile.html -%}
    {%- include components/divider.html -%}
    {%- include sections/contacts.html -%}
    {%- include components/divider.html -%}
    {%- include sections/social-resume.html -%}
  </div>
  <div class="w-full flex flex-1 flex-col gap-4">
    {%- include sections/work-experience.html -%}
    {%- include sections/skills.html -%}
    {%- include sections/education.html -%}
  </div>
</main>
