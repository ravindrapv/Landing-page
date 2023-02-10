/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Build() {
  return (
    <div>
      <section className=" lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
              }}
            />
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-white md:text-3xl">
              Get Paid Per
              <span className="text-orange-500"> Interview</span>
            </h2>
            <p className="mt-4 text-blue-900 dark:text-blue-900">
              Use your expertise of taking the interviews on
              <span className="hero-sub font-semibold"> CLIQHR </span>
              Freelance Interviewers Platform & get paid for every interview you
              oversee. Join the platform & be the part of a next-gen tech-driven
              hiring team!
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-900 rounded-lg hover:bg-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-80"
              >
                Join As A Interviewer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
