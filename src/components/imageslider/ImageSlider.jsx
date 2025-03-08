import React, { useState } from 'react'
import data from './data'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = data.length

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    return (
        
        <div className=" flex justify-center items-center h-screen w-screen ">
            <div className="relative flex justify-center items-center h-[30vh] w-[60vw] sm:h-[50vh] sm:w-[50vw] overflow-visible ">
            {/* Left Arrow */}
            <BiLeftArrow 
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white h-10 w-10 p-2 rounded-full cursor-pointer z-10"
                onClick={prevSlide}
            />
            
            {/* Image */}
            <img 
                src={data[currentSlide].image} 
                className="h-full w-full object-cover brightness-50 transition-all duration-500 rounded-xl shadow-2xl " 
                alt={`Slide ${currentSlide + 1}`} 
            />

            {/* Navigation Circles */}
            <div className="absolute bottom-5 flex gap-2">
                {data.map((_, index) => (
                    <div 
                        key={index}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 
                        ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`} 
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            {/* Right Arrow */}
            <BiRightArrow 
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white h-10 w-10 p-2 rounded-full cursor-pointer z-10"
                onClick={nextSlide}
            />
        </div>
        </div>
    )
}

export default ImageSlider
