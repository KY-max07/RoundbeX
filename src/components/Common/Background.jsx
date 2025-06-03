import React from 'react'

const Background = () => {
  return (
    <>
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white ">
      <div
        className="absolute inset-0 [background-size:10px_10px] [background-image:radial-gradient(#ddd_1px,transparent_1px)]"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(at_bottom,transparent_-20%,black)] " />

    </div >
    </>
  )
}

export default Background