import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-1/2 w-full flex flex-col items-center justify-center">
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-600">Farmacia Laborda</h1>
        <p className="text-lg md:text-xl font-semibold text-stone-600">Somos una farmacia en pico y la que atiende esta re buena</p>
      </div>
    </section>
  )
}

export default Hero
