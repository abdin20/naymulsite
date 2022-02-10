import Link from "next/link"
import React from "react"
import ThemeSwitch from "../components/ThemeSwitch"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-stone-300 md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Naymul
                    </a>
                </Link>
                <div className="space-x-5 container px-4 mx-auto lg:max-w-4xl flex items-center justify-end">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        About Me
                    </a>
                </Link> 
                <Link href="/projects">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Projects
                    </a>
                </Link>
                <ThemeSwitch></ThemeSwitch>
                </div>
           
           
            </div>
        </div>
    )
}

export default Navigation;