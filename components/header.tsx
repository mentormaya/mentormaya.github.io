import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Homemade_Apple } from 'next/font/google'

const homemadeApple = Homemade_Apple({ weight: ["400"], subsets: ["latin"] })

const Header = () => {
  return (
    <header className={cn(
      "w-full flex justify-between items-center px-16 py-6",
      // "bg-primary-900 text-white"
    )}>
      <div className={cn(
        "brand",
        "flex justify-center items-center gap-4",
      )}>
        <Image
          src="/Logo.svg"
          width={50}
          height={50}
          alt="Logo for Ajay"
        />
        <h1 className={cn(homemadeApple.className, "font-bold text-2xl text-primary-100")}>Ajay</h1>
      </div>
      <div className={cn(
        "navigation",
        "flex flex-row justify-between items-center gap-36"
      )}>
        <nav>
          <ul className={cn(
            "flex flex-row gap-12 uppercase font-medium text-muted-100"
          )}>
            <li className='text-primary-100 font-bold hover:text-primary-100'>
              <a href="/">Profile</a>
            </li>
            <li className='hover:text-primary-100'>
              <a href="/about">About</a>
            </li>
            <li className='hover:text-primary-100'>
              <a href="/about">Skills</a>
            </li>
            <li className='hover:text-primary-100'>
              <a href="/about">Projects</a>
            </li>
            <li className='hover:text-primary-100'>
              <a href="/about">Contact</a>
            </li>
          </ul>
        </nav>
        <button type="button" className={cn("bg-primary-100/80 hover:bg-primary-100 px-16 py-2 rounded text-white")}>Blogs</button>
      </div>
    </header>
  )
}

export default Header