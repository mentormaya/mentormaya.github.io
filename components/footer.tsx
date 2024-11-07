import React from 'react'
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <footer className={cn(
      "flex justify-center items-center",
      "bg-primary-100 text-white",
    )}>
      <p>
        &copy; 2021 Ajay Singh. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer