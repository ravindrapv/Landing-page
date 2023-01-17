import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


function Carousel() {
    const slides = [
        {
            img: '/images/ck.png',
            "heding": "For business",
            desc: "Hello interviewers! Are you wanna be interviewers expert ? Yes ,This is the right place to land. Earn a knowledge and money. Come join us, build a identity for yourself.",
            btn: "Get started"
        },
        {
            img: '/images/Group 73.png',
            "heding": "For Interviewer",
            desc: "Acquiring talent is not easy! We are glad to share a different tale here. With the right bandwidth of interviewers across multiple skills, finding your ideal candidate becomes easier and faster.",
            btn: "Get started"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] w-full py-16 px-4 relative group flex flex-wrap'>
            <h3 className=' text-2xl font-serif font-bold'>Ease the job application process and let you meet the best candidates in the shortest time</h3>
            <div>
                <div className="flex">
                    <ul>
                        <li className=' text-3xl text-pink-600 mb-4'> {slides[currentIndex].heding} <br /></li>
                        <li className=' text-2xl'>{slides[currentIndex].desc}</li>
                    </ul>
                    <figure>
                        <img src={slides[currentIndex].img} alt="img" />
                    </figure>
                </div>
                <button className='btn-2'>
                    {slides[currentIndex].btn}
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;