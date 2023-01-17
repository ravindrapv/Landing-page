/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export default function Services() {
  return (
    <div className=' flex justify-center items-center'>
      <div className="py-16  from-green-50 to-cyan-100">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl text-center">Our Services</h2>
            <p className="lg:w-6/12 lg:mx-auto">Ease the job application process and let you meet the best candidates in the shortest time</p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img src="/images/forInt.png" alt="art cover" loading="lazy" height="300" className=" h-56 object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">For Business</h4>
                    <p className="text-gray-600">Acquiring talent is not easy! We are glad to share a different tale here. With the right bandwidth of interviewers across multiple skills, finding your ideal candidate becomes easier and faster.</p>
                  </div>
                  <a href="3" className="block w-max text-cyan-600">Read more</a>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img src="/images/forB.png" alt="art cover" loading="lazy" height="300" className="h-56 rounded-lg transition duration-500 group-hover:rounded-xl" />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">For Interviewer</h4>
                    <p className="text-gray-600">Hello interviewers! Are you wanna be interviewers expert ?Yes ,This is the right place to land. Earn a knowledge and money. Come join us, build a identity for yourself.</p>
                  </div>
                  <a href="#" className="block w-max text-cyan-600">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a>
        </div>

        <div class="mt-2">
          <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Accessibility tools for designers and developers</a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

          <div class="flex items-center">
            <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Khatab wedaa</a>
          </div>
        </div>
      </div> */}
    </div>
  )
}
