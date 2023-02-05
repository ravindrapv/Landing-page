/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Testimonials() {
  return (
    <>
      <section className="my-8 dark:bg-gray-800 dark:text-gray-100 bg-slate-100 py-8">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
            What our customers are saying about us
          </h2>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center"
            >
              <div className="flex flex-col max-w-xl mx-4 my-6 shadow-2xl">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt=""
                    className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle  bg-orange-500">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle  bg-orange-500">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full justify-center"
            >
              <div className="flex flex-col max-w-xl mx-4 my-6 shadow-2xl">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt=""
                    className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle  bg-orange-500">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle  bg-orange-500">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full justify-center"
            >
              <div className="flex flex-col max-w-xl mx-4 my-6 shadow-2xl">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt=""
                    className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle  bg-orange-500">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle  bg-orange-500">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full justify-center"
            >
              <div className="flex flex-col max-w-xl mx-4 my-6 shadow-2xl">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-sky-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt=""
                    className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle  bg-orange-500">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle  bg-orange-500">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
