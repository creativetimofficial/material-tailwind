import React from 'react';
import H5 from 'components/Typography/Heading5';
import LeadText from 'components/Typography/LeadText';
import Icon from 'components/Icon/Icon';

export default function IndexFooter() {
    return (
        <>
            <footer className="relative bg-gray-100 pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <H5 color="gray">Material Tailwind</H5>
                            <LeadText
                                color="blueGray"
                                style={{ marginTop: '0' }}
                            >
                                Easy to use React components for Tailwind CSS
                                and Material Design.
                            </LeadText>
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href="https://www.facebook.com/CreativeTim"
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                <a
                                    href="https://www.twitter.com/creativetim"
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/creativetimofficial/"
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </a>
                                <a
                                    href="https://www.dribbble.com/creativetim"
                                    className="grid place-items-center bg-white text-pink-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-dribbble"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </a>
                                <a
                                    href="https://github.com/creativetimofficial"
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://www.creative-tim.com/presentation?ref=material-tailwind"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href=" https://www.creative-tim.com/blog?ref=material-tailwind"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://www.github.com/creativetimofficial?ref=material-tailwind"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href=" https://www.creative-tim.com/templates/free?ref=material-tailwind"
                                            >
                                                Free Products
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind"
                                            >
                                                Contribute
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind"
                                            >
                                                Code of Conduct
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href="https://creative-tim.com/contact-us?ref=material-tailwind"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-700 font-medium py-1">
                                Copyright © {new Date().getFullYear()} Material
                                Tailwind by{' '}
                                <a
                                    href="https://www.creative-tim.com?ref=material-tailwind"
                                    className="text-gray-700 hover:text-gray-900 transition-all"
                                >
                                    Creative Tim
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
