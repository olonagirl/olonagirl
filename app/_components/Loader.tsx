import React from 'react'

const Loader = () => {
  return (
    <div className="grid h-[500px] w-full place-items-center">
    <div className="border-t-gray-400 aspect-square w-7 animate-spin rounded-full border-2 border-dark"></div>
  </div>
  )
}

export default Loader