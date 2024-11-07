"use client"
import { cn } from '@/lib/utils'
import { CopyCheck, CopyIcon } from 'lucide-react'
import { useState } from 'react'

const buttonClasses = 'flex items-center text-xs font-medium text-white rounded'

export interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={cn(buttonClasses, className, "absolute top-2 right-2 p-1 hover:text-purple-500")}
    >
      {isCopied ? <CopyCheck size={16} /> : <CopyIcon size={16} />}
      <span>{isCopied ? ' Copied!' : ' Copy'}</span>
    </button>
  )
}

