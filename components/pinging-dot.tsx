import React from 'react'

const PingingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
    </span>
  )
}

export default PingingDot