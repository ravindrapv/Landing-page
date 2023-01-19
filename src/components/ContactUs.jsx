
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
export default function ContactUs() {
    const initialFormState = {
        name: "",
        email: "",
        message: "",
    };

    const [contactData, setContactData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setContactData({
            ...contactData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dazirsj",
                "template_2s7iovl",
                e.target,
                "IuEWj5yPuldsFllob",
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );

        //reset the form after submission
        setContactData({ ...initialFormState });
    };
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 bg-slate-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">We Expect your <br /> Valuable Feedback</h2>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 bg-slate-200">
                    <h2 className="w-full text-3xl text-center font-bold leading-tight">Feedback</h2>
                    <div>
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input name="name" type="text" placeholder="Your name" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400 dark:bg-gray-800" onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input name="email" type="email" placeholder="Your email" onChange={handleChange}
                            required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1">Message</label>
                        <textarea name="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400 dark:bg-gray-800" onChange={handleChange}
                            required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-sky-400 focus:ring-sky-400 hover:ring-sky-400 dark:text-gray-900 bg-pink-400">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

