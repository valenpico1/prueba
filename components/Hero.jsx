import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-1/2 w-full flex flex-col items-center justify-center" style={{ backgroundColor: '#f6ede4' }}>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Farmacia Laborda</h1>
        <p className="text-lg md:text-xl">Somos una farmacia en pico y la que atiende esta re buena</p>
      </div>
    </section>
  )
}

export default Hero
