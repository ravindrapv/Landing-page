/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export default function About() {
  return (
    <section>
      <header>
        <div className=" bg-about py-14 justify-center items-center h-full">
          <div className=' my-8'>
            <h3 className="text-4xl tracking-widest text-green-400 text-center">About us</h3>
            <div className="mt-2 text-center">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
            </div>
          </div>
          <h1 className="mt-2 text-center text-3xl text-white font-semibold mb-5">Our Goal is to reach world's largest interviewer product</h1>
          <h4 className="text-center font-thin text-xl mt-2 text-white">CLIQHR is world’s leading on demand Interview platform built to disrupt traditional <br /> hiring methods and works on a unique concept of outsourced interviewing.</h4>

          <div className="md:flex md:justify-center md:space-x-8 md:px-14">

            <div className="mt-16 py-4 px-4  w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="w-48 h-48 ml-10" src="/images/Group 305.png" alt="" />
                <div className="mt-4 text-center">
                  <h1 className=" text-6xl font-bold text-green-400">10,000+ Hrs</h1>
                  <p className="mt-4 text-blue-400 text-2xl font-bold">Has been we served</p>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4 w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="w-48 h-48  ml-10" src="/images/Group 323.png" alt="" />
                <div className="mt-4 text-center">
                  <h1 className=" text-6xl  font-bold text-green-400">2000+</h1>
                  <p className="mt-4 text-blue-400 text-2xl font-bold">Interviews are has been conducted.</p>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4 w-72 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="w-48 h-48  ml-10" src="/images/Group 322.png" alt="" />
                <div className="mt-4 text-center">
                  <h1 className="text-6xl font-bold text-green-400">4.5 / 5</h1>
                  <p className="mt-4 text-blue-400 text-2xl font-bold">Average Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}