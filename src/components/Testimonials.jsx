/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export default function Testimonials() {
  const [setSwiperRef] = useState(null);
  return (
    <>
      <section className="my-8 dark:bg-gray-800 dark:text-gray-100 bg-slate-100 py-8 px-12">
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

        <div className="flex flex-wrap -mx-4">
          <Swiper
            onSwiper={setSwiperRef}
            breakpoints={{
              600: { slidesPerView: 2 },
            }}
            slidesPerView={1}
            centeredSlides={true}
            loopedSlides={4}
            loop={true}
            spaceBetween={30}
            pagination={{
              type: "el: '.swiper-pagination'",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit image-w">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900  ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
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
                        className="absolute right-0 w-8 h-8 text-orange-500"
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
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
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
                        className="absolute right-0 w-8 h-8 text-orange-500"
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
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
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
                        className="absolute right-0 w-8 h-8 text-orange-500"
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
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
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
                        className="absolute right-0 w-8 h-8 text-orange-500"
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
