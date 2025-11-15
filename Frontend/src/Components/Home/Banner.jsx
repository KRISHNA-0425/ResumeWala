import React from 'react'

const Banner = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-14 py-2 font-medium text-sm text-white bg-[linear-gradient(to_right,#f8b500,#fceabb)] ">
            <p className="text-center md:text-left mb-2 md:mb-0">
                🚀 Build a professional resume in minutes — <span className="font-semibold text-gray-200">Start for FREE!</span>
            </p>
            <div className="flex items-center space-x-6">
                <button
                    type="button"
                    className="font-normal text-gray-800 bg-white hover:bg-gray-200 px-7 py-2 rounded-full transition-all"
                >
                    Create Resume
                </button>
                <button type="button" aria-label="Close banner">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="12.532"
                            width="17.498"
                            height="2.1"
                            rx="1.05"
                            transform="rotate(-45.74 0 12.532)"
                            fill="#fff"
                        />
                        <rect
                            x="12.533"
                            y="13.915"
                            width="17.498"
                            height="2.1"
                            rx="1.05"
                            transform="rotate(-135.74 12.533 13.915)"
                            fill="#fff"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Banner
