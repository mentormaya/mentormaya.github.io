import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LetsTalk = () => {
  return (
    <div className="px-6 py-6 sm:py-12 lg:px-8 border border-zinc-500/60 rounded">
      <div className="mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-300">Let&apos;s Talk</h1>
        <p className="mt-3 text-lg text-zinc-400">
          Feature request? Suggestion? or maybe you&apos;d like to be our critic! Here&apos;s a form just for that.
        </p>
      </div>
      <form className="mx-auto mt-8 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-zinc-300">First name</label>
            <div className="mt-2.5">
              <Input type="text" name="first-name" id="first-name" placeholder="Your First Name" className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent" />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-zinc-300">Last name</label>
            <div className="mt-2.5">
              <Input type="text" name="last-name" id="last-name" placeholder="Your Last Name" className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-zinc-300">Company</label>
            <div className="mt-2.5">
              <Input type="text" name="company" id="company" placeholder="Your Company Name" className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-300">Email</label>
            <div className="mt-2.5">
              <Input type="email" name="email" id="email" placeholder="Your Email Address" className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-zinc-300">Phone number</label>
            <div className="mt-2.5">
              <Input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold leading-6 text-zinc-300">Message</label>
            <div className="mt-2.5">
              <textarea name="message" id="message" rows={4} placeholder="Share your thoughts..." className="w-full rounded border border-zinc-300/60 px-3.5 py-2 text-zinc-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent"></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-end gap-4">
          <Button type="reset" variant={"outline"} className="bg-transparent">
            Clear
          </Button>
          <Button type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LetsTalk