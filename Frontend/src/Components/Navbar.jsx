import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const user = {
        name: "Krishna",
    };

    const navigate = useNavigate();

    const logOut = () => {
        navigate("/");
    };

    return (
        <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 text-slate-800 transition-all">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl tracking-tight hover:text-indigo-700 transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 3v18h18" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                    </svg>
                    Resume<span className="text-gray-900">Wala</span>
                </Link>

                {/* Right Section */}
                <div className="flex items-center gap-5 text-sm font-medium">
                    <p className="hidden sm:block text-gray-600">
                        Hi, <span className="font-semibold text-gray-800">{user?.name}</span>
                    </p>

                    <button
                        onClick={logOut}
                        className="border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 px-6 py-2 rounded-full transition-all active:scale-95 font-medium"
                    >
                        Log out
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
