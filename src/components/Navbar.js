import React, { useState, } from "react"
import Link from "next/link"
import { AiFillMail } from "react-icons/ai"
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs"
import Image from "next/image"
import { useRouter } from "next/router"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative pt-2">
      {/* Desktop Navbar */}
      <nav className="hidden w-11/12 lg:w-full fixed md:flex flex-row container md:py-3 py-3 text-bg-100 z-50  font-semibold items-center border border-text-200 bg-bg-200 rounded-xl">
        <div className="w-3/12 flex justify-start">
          <Link
            href="/"
            className="hover:animate-bounce cursor-pointer grayscale hover:grayscale-0"
          >
            <Image src="./logo-2.svg" width={50} height={0} />
          </Link>
        </div>
        <div className="w-6/12 justify-center flex space-x-4 text">
          <Link
            href="/"
            className="hover:text-primary-200 hover:border-b-2 hover:animate-pulse"
            passHref
          >
          &lt;Home/&gt;
          </Link>
          <Link
            href="/about"
            className="hover:text-primary-200 hover:border-b-2 hover:animate-pulse"
          >
            &lt;About/&gt;
          </Link>
          <Link
            href="/project"
            className="hover:text-primary-200 hover:border-b-2 hover:animate-pulse"
          >
            &lt;Project/&gt;
          </Link>
        </div>
        <div className="w-3/12 flex items-center justify-end gap-3 text-xl ">
          <Link
            href="https://github.com/ANgafifudin"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-black"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aji-ngafifudin/"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-blue-500"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="mailto:ajingafifudin@gmail.com"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-bg-100"
          >
            <AiFillMail />
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="xl:hidden fixed flex flex-row container md:py-3 py-3 w-11/12 text-bg-100  font-semibold items-center border border-text-200 bg-bg-200 z-50 rounded-xl">
        <div className="w-6/12 uppercase flex justify-start">
          <Link
            href="/"
            className="hover:animate-bounce cursor-pointer grayscale hover:grayscale-0"
          >
            <Image src="./logo-2.svg" width={50} height={0} />
          </Link>
        </div>

        <div className="w-6/12 flex items-center justify-end text-xl">
          <button
            className="text-bg-100 hover:text-primary-200 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M19 14H5v-1h14v1zm0-5H5V8h14v1zm0-6H5v1h14V3zm0 11H5v1h14v-1z" />
              ) : (
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4zM4 4h16v2H4z" />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="xl:hidden container py-2.5 mt-52 w-11/12 absolute font-semibold text-bg-200 z-50">
            <Link
              href="/"
              className="block rounded-t-md pt-3 py-2 bg-white hover:bg-primary-200 border-b-2 border-text-200 hover:text-white pl-3"
            >
              &lt;Home/&gt;
            </Link>
            <Link
              href="/about"
              className="block py-2 bg-white hover:bg-primary-200  border-b-2 border-text-200 hover:text-white pl-3"
            >
              &lt;About/&gt;
            </Link>
            <Link
              href="/project"
              className="block rounded-b-md pb-3 py-2 bg-white hover:bg-primary-200  border-b-2 border-text-200 hover:text-white pl-3"
            >
              &lt;Project/&gt;
            </Link>
          </div>
        )}
      </nav>
      <div className="xl:hidden relative bottom-0">
        <div className="w-full flex gap-3.5 container md:right-[420px] bottom-[50px] right-44 origin-center rotate-90 fixed items-end text-lg text-justify mx-auto z-50 drop-shadow-2xl text-white">
          <Link
            href="mailto:ajingafifudin@gmail.com"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-accent-100 "
          >
            <AiFillMail />
          </Link>
          <Link
            href="https://github.com/ANgafifudin"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-black"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aji-ngafifudin/"
            target="_blank"
            className="hover:animate-bounce opacity-50 hover:opacity-100 hover:text-blue-500"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
    </div>
  )
}

export default Navbar
