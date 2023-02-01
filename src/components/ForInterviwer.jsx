/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useForm } from "react-hook-form";


export default function ForInterviwer() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <section className="min-h-screen bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:w-1/2 lg:mx-10">
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">Let’s talk about Interviwer</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Ask us everything and we would love
                                to hear from you
                            </p>

                            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input type="text" id='name' {...register('name', { required: true, maxLength: 30 })} placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.name && errors.name.type === "required" && <span className=' text-red-600'>This is required</span>}
                                    {errors.name && errors.name.type === "maxLength" && <span className=' text-red-600'>Max length exceeded</span>}

                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" id='email' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@company\.com$/i })} placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.email && errors.email.type === "required" && (<p className=' text-red-600'>enter email</p>)}
                                    {errors.email && errors.email.type === "pattern" && (<p className=' text-red-600'>enter  email pattern wrong</p>)}

                                </div>
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Skills</label>
                                    <input type="text" {...register('Skills', { required: true })} placeholder="Geetha tech" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.Skills && errors.Skills.type === "required" && (<p className=' text-red-600'>Enter Skills </p>)}
                                </div>
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                                    <input type="number" {...register('number', { required: true })} placeholder="0123456789" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.number && errors.number.type === "required" && (<p className=' text-red-600'>Enter contact number</p>)}
                                </div>

                                <div className="w-full mt-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea className="block w-full h-16 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <input type="submit" value="get in touch" className=" w-1/2 items-center px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" />
                            </form>
                        </div>

                        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                            <img className="hidden object-cover mx-auto  lg:block shrink-0 w-3/4 h-3/4" src="/images/Object1.png" alt="" />

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        Chennai. India
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">0123456789</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">careers@cliqhr.co.in</span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                        </svg>
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                            <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                            <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
