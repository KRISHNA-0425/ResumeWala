import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className=" px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-600 border-t border-indigo-100">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-300/30 pb-8">
                {/* Logo & About */}
                <div className="md:max-w-96">
                    <p className="mt-6 text-sm leading-relaxed text-gray-600">
                        ResumeWala helps professionals craft elegant, ATS-friendly resumes that get noticed.
                        Design your next opportunity with confidence and clarity.
                    </p>
                    {/* Socials */}
                    <div className="flex gap-4 mt-6">
                        <a href="https://www.instagram.com/__krishna__0425/" className="hover:text-indigo-600">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/krishna-sinha-86097330a/" className="hover:text-indigo-600">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex-1 flex flex-wrap items-start md:justify-end gap-16">
                    <div>
                        <h2 className="font-semibold mb-4 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-indigo-600 transition">Home</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                   
                    <div>
                        <h2 className="font-semibold mb-4 text-gray-800">Get in Touch</h2>
                        <div className="text-sm space-y-2">
                            <p>📞 +1 (212) 456-7890</p>
                            <p>📧 2k23csiot2311155@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <p className="pt-6 text-center text-xs md:text-sm pb-6 text-gray-500">
                © {new Date().getFullYear()} <span className="font-medium text-indigo-600">Resume Wala</span>. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
