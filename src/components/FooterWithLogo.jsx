import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
    return (
        <footer className="w-full bg-dark text-light p-8 border-t-2 border-gray-200">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-dark text-center md:justify-between">
                <div className="flex items-center justify-center">
                    <img src="/applogo.png" alt="logo-ct" className="w-16 mr-2" />
                    <h6 className="font-semibold text-2xl text-light">NFT Inscribe</h6>
                </div>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-light">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-light hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-light hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-light hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-light hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-700" />
            <Typography color="blue-gray text-gray-400" className="text-center font-normal">
                &copy; {new Date().getFullYear()} NFT Inscribe - All rights reserved
            </Typography>
        </footer>
    );
}