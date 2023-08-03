const Footer = () => {
    return (
        <div className="bg-gray-900 overflow-hidden">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src="./generic_logo.png" className="w-24" />
                        </a>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-gray-100">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi maiores nostrum aut eos, 
                                molestiae eum laborum veniam magnam quas aliquam, molestias cumque dolore, 
                                ipsam nobis? Mollitia nesciunt veniam expedita nemo!
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-gray-100">
                                Discover
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        to="/"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        to="/whyus"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Why Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/offers"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Offers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/about"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/contact"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-100">
                                For Job Seekers
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        to="/platform"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/trading/account-type"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Startup Jobs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/trading/funding"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Salary Calculator
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="https://drive.google.com/file/d/10bmXD0JyOqoefxJgk-OkjllmF0yuvOUv/view?usp=share_link"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Startup Hiring Data
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-100">
                                For Companies
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        to="/charts/economic-calender"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/charts/live-price"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Our Venture
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/charts/live-price"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/charts/live-price"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/charts/live-price"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-100">
                                REGULATION & LICENSING
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        to="/"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Policy Statement
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/risk-disclosure"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Risk Disclosure
                                    </a>
                                </li>
                                <li>
                                    <a
                                        to="/terms-&-conditions"
                                        className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-[#35A29F]"
                                    >
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                    <p className="text-sm text-gray-400">
                        © Copyright 2020 Lorem Ipsum Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
