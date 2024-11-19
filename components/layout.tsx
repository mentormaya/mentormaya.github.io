"use client";

import React from 'react'
import { Navigation } from './nav'
import Footer from './footer'
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  console.log('pathname', pathname)
  if (pathname === '/') {
    console.log('homepage')
    return children
  }
  return (
    <div className="relative">
      <div className="relative my-6 ">
        <Navigation />
        <div className="w-full pt-8 mx-auto lg:pt-16 max-w-[90%] mb-12">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout