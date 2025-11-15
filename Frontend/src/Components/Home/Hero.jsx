import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <section
            className=" select-none bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] 
        w-full bg-no-repeat bg-cover bg-center text-sm pb-44 font-[Poppins]"
        >
            {/* Navbar */}
            <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
                <a href="/" className="flex items-center  ">

                    <span className="text-gray-900 font-bold text-xl">
                        Resume<span className="text-gray-700">Craft</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div
                    className={`max-md:absolute max-md:top-0 max-md:left-0 ${menuOpen ? "max-md:w-full" : "max-md:w-0"
                        } max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/60 
          max-md:backdrop-blur max-md:flex-col scroll-smooth max-md:justify-center flex items-center gap-8 font-medium`}
                >
                    

                        <a href="/" className="hover:text-gray-600">
                            Home
                        </a>
                        <a href="#templates" className="hover:text-gray-600">
                            Templates
                        </a>
                        <a href="#features" className="hover:text-gray-600  ">
                            features
                        </a>
                        <a href="#pricing" className="hover:text-gray-600">
                            Pricing
                        </a>
                    

                    {/* Close button mobile */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contact / CTA */}
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate("/app?state=register")}
                        className="cursor-pointer hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
                        Get Started
                    </button>
                    <button
                        onClick={() => navigate("/app?state=login")}
                        className="cursor-pointer hidden md:block bg-transparent text-black hover:bg-slate-200 border-2 bg-border-black px-6 py-3 rounded-full font-medium transition">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        <path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Announcement */}
            <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32">
                <span>🎉 Create your first resume free!</span>
                <button className="flex items-center gap-1 font-medium text-gray-800">
                    <span>Try Now</span>
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54"
                            stroke="#050040"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8 text-gray-900">
                Build Stunning Resumes Effortlessly
            </h1>

            <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-gray-700">
                Craft sleek, professional resumes in minutes. Choose templates, fill in your
                details, and export instantly — no design skills required.
            </p>

            {/* CTA Buttons */}
            <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
                <button
                    onClick={() => navigate("/app")}
                    className=" cursor-pointer flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md"
                >
                    Resume Builder <span className="text-lg"><IoArrowForwardCircleOutline />
                    </span>
                </button>

                <button className="cursor-pointer flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3 text-gray-900">
                    <span>View Templates</span>
                    <svg
                        width="6"
                        height="8"
                        viewBox="0 0 6 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.25.5 4.75 4l-3.5 3.5"
                            stroke="#050040"
                            strokeOpacity=".4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;
