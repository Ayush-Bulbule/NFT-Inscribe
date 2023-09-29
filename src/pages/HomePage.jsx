import React from 'react'
import { StickyNavbar } from '../components/StickyNavbar'
import { Button, IconButton } from '@material-tailwind/react'
import { FaShieldAlt, FaGlobe, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const featuresData = [
    {
        "title": "Decentralized Verification",
        "description": "Enables recipients to independently verify certificate authenticity without relying on a central authority.",
        "icon": <FaShieldAlt size={22} />,
        "color": "red"
    },
    {
        "title": "Cross-Border Recognition",
        "description": "Certificates designed for global recognition, facilitating international travel and opportunities.",
        "icon": <FaGlobe size={22} />,
        "color": "blue"
    },
    {
        "title": "Immutable Record Keeping",
        "description": "Ensures secure blockchain storage for certificate data, enhancing accountability and reducing fraud risk.",
        "icon": <FaLock size={22} />,
        "color": "green"
    }
]

const HomePage = () => {
    return (
        <>

            {/* Hero Section */}
            <div className="container min-h-[80vh] flex items-center md:max-w-6xl justify-center flex-col-reverse md:flex-row mx-auto md:my-10">
                <div className="w-2/3">
                    <h1 className="text-6xl font-bold text-gray-900 md:pr-24">
                        Redefining Certificates with NFTs
                    </h1>
                    <p className="text-xl text-gray-700 font-medium mt-4">
                        Elevate your achievements with NFT Inscribe – a groundbreaking platform that transforms certificates into unique digital assets. Secure, authentic, and forever yours
                    </p>
                    <div className="mt-12 flex gap-6">
                        <Link to='/issue-certificate'>
                            <Button size="lg" color='blue' className='py-6 px-8'>Issue Certificate</Button>
                        </Link>
                        <Link to='/verify-certificate'>
                            <Button size="lg" color='white' className='py-6 px-8'>Verify Certificate</Button>
                        </Link>

                    </div>
                </div>
                <div className="w-1/3">
                    <img src="/hero.png" alt="" />
                </div>
            </div>


            {/* Features Section */}
            <div className="bg-blue-50 md:px-20 py-10  ">
                <h4 className='text-center justify-center text-2xl font-bold'>Why NFT based certificates?</h4>
                <div className="flex flex-col md:flex-row w-full justify-between  md:py-16">

                    {/*  */}
                    {
                        featuresData.map((feature, index) => (
                            <div class="relative mt-6 text-center flex w-96 flex-col items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <IconButton size="lg" color={feature.color} className='-mt-5'>
                                    {feature.icon}
                                </IconButton>
                                <div class="p-6">

                                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {feature.title}
                                    </h5>
                                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        {feature.description}
                                    </p>
                                </div>
                                <div class="p-6 pt-0">
                                    <a
                                        class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-blue-500"
                                        href="#"
                                    >
                                        <button
                                            class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            data-ripple-dark="true"
                                        >
                                            Learn More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* How It Works */}
            <div className=" md:px-20 py-10  ">
                <h4 className='text-center my-8 justify-center text-2xl font-bold'>How it Works?</h4>
                <div className="md:max-w-3xl mx-auto">
                    <img src='/howitworks.svg' alt="how it workd" />
                </div>

            </div>



        </>
    )
}

export default HomePage