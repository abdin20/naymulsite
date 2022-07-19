import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hi, I'm Naymul
                    </h1>
                    <br></br>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I am a Full Stack Developer working at{' '}
                            <a  className="underline" href="https://wowa.ca/">Wowa Leads</a>
                             .
                        </p>
                 
                        <p className="mt-6 text-gray-800 dark:text-white">
                            Currently, I am actively developing websites with ReactJS, a music discord bot with DiscordJS/MongoDB, and games using Unity and C#.
                        </p>

                        <p></p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;