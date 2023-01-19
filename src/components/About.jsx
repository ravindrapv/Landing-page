/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export default function About() {
  return (
    <section>
      <header>
        <div class=" bg-gray-100 py-14 justify-center items-center">
          <h3 class="text-4xl tracking-widest text-pink-600 text-center">About us</h3>
          <h1 class="mt-8 text-center text-3xl text-blue-800 font-bold"><span className=' text-pink-600'>CLIQHR</span> Goal is to reach world's largest interviewer product</h1>
          <h4 class="text-center font-thin text-2xl mt-14">CLIQHR is world’s leading on demand Interview platform built to disrupt traditional hiring methods and works on a unique concept of outsourced interviewing</h4>

          <div class="md:flex md:justify-center md:space-x-8 md:px-14">

            <div class="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="/images/Group 305.png" alt="" />
                <div class="mt-4 text-blue-800 text-center">
                  <h1 class="text-2xl font-bold">10,000+ Hrs</h1>
                  <p class="mt-4 text-gray-600">Has been we served</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                </div>
              </div>
            </div>
            <div class="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="/images/Group 323.png" alt="" />
                <div class="mt-4 text-blue-800 text-center">
                  <h1 class="text-xl font-bold">2000+</h1>
                  <p class="mt-4 text-gray-600">Interviews are has been conducted.</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                </div>
              </div>
            </div>
            <div class="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="w-sm">
                <img class="w-64" src="/images/Group 322.png" alt="" />
                <div class="mt-4 text-blue-800 text-center">
                  <h1 class="text-xl font-bold">33%</h1>
                  <p class="mt-4 text-gray-600">Recruitment hours saved</p>
                  <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}