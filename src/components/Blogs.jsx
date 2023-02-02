/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Blogs() {
  return (
    <div>
      <>
        <section className="pt-4 pb-4 mx-8">
          <div className="container">
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
                Our Blogs
              </h2>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
                <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
                <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
                     bg-primary       
                     rounded
                                                        inline-block
                                                        text-center
                                                        py-1
                                                        px-4
                                                        text-xs
                                                        leading-loose
                                                        font-semibold
                                                        text-white
                                                        mb-5
                                                        "
                    >
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href=""
                        className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  "
                      >
                        Keen on finding the top talent
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      We discover the tech talent that is tailor-made for your
                      team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
               bg-primary
               rounded
               inline-block
               text-center
               py-1
               px-4
               text-xs
               leading-loose
               font-semibold
               text-white
               mb-5
               "
                    >
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href=""
                        className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  "
                      >
                        We build great tech teams
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Save your valuable engineering time. Now build your team
                      faster than ever.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
               bg-primary
               rounded
               inline-block
               text-center
               py-1
               px-4
               text-xs
               leading-loose
               font-semibold
               text-white
               mb-5
               "
                    >
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href=""
                        className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  "
                      >
                        Impartial interviews
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Unbiased interviews by expert interviewer community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
