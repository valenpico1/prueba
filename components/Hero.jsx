import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-gray-900">
      <Image 
        src="/herobackground.jpg" 
        alt="Hero Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Farmacia Laborda</h1>
        <p className="text-lg md:text-xl">Somos una farmacia en pico y la que atiende esta re buena</p>
      </div>
    </section>
  )
}

export default Hero
