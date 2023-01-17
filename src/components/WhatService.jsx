import React from 'react'

export default function WhatService() {
    return (
        <div>
            <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mx-8 mt-4">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left">
                        <h2 class="text-4xl font-bold text-gray-900 md:text-3xl">
                            What Services <br /> we Provide
                        </h2>
                        <div class="mt-4 md:mt-8">
                            <ul className=' text-xl'>
                                <li className=' mb-4'>We saves your time and stress</li>
                                <li className=' mb-4'>Create better experience for you and the candidate</li>
                                <li className=' mb-4'>Give more confidence with every hire</li>
                                <li className=' mb-4'>Helps you align more candidates to your mission and culture</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <figure className=' mt-4'>
                    <img src="images/inter2.jpg" alt="img" />
                </figure>
            </section>

        </div>
    )
}
