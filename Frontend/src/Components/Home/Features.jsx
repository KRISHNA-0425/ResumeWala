import React from "react";

const Features = () => {
    const featuresData = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500 size-8 mt-4"
                >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
            ),
            title: "Instant Resume Generation",
            description:
                "Create a polished, professional resume in just minutes — no design skills needed.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500 size-8 mt-4"
                >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
            ),
            title: "Modern & Clean Templates",
            description:
                "Choose from elegant, ATS-friendly designs that make your resume stand out.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500 size-8 mt-4"
                >
                    <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
            ),
            title: "Customizable & Editable",
            description:
                "Easily edit content, tweak sections, and personalize your resume anytime.",
        },
    ];

    return (
        <>
            <section
                className="py-20 flex flex-col justify-center items-center "
                id="features"
            >
                {/* Section Header */}
                <div className="text-center">
                    <p className="text-center font-medium text-indigo-600 px-10 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 w-max mx-auto">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl font-semibold text-center mx-auto mt-4 text-gray-900">
                        Build Your Resume the Smart Way
                    </h2>
                    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                        Everything you need to create a beautiful, job-winning resume — all in one place.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 px-6">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className={`hover:-translate-y-1 transition duration-300 ${index === 1
                                ? "p-px rounded-[13px] bg-gradient-to-br from-indigo-400 to-indigo-700"
                                : ""
                                }`}
                        >
                            <div className="p-6 rounded-xl space-y-4 border border-gray-200 bg-white shadow-sm max-w-80 w-full hover:shadow-md transition">
                                {feature.icon}
                                <h3 className="text-base font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 pb-4">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Features;
