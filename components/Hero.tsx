import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 pt-0 mx-auto md:py-24 md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/3 md:mb-0">
          {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-2/3 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-6xl font-medium text-gray-900 title-font">
            goosebumps
            <br className="lg:inline-block" />
            <span>.fm</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Button
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
