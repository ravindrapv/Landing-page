/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Hero() {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" text-xl font-bold leading-none sm:text-6xl">BUILD GREAT
                            TECH TEAMS  FASTER WITH CLIQHR
                        </h1>
                        <h2 className='py-1 text-xl'>
                            A fully automated platform to conduct Exit Interviews with Real-Time analytics.
                        </h2>
                        <div className=' flex gap-8'>
                            <button className='btn'>For interwive</button>
                            <button className='btn'>For Business</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 sm:h-full lg:h-96 xl:h-112 2xl:h-128 h-full w-6/12 hero-img">
                        <img src="images/Group 167.png" alt="img-1" />
                    </div>
                </div>
            </section>
        </div>
    )
}