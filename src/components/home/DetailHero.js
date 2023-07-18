import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const DetailHero = () => {
  

  return (
    <div>
      <section >
        <div className="container md:pt-40 pt-32 text-text-200">
          <div className="flex flex-wrap flex-col md:flex-row text-white md:gap-0">
            <div className="md:w-1/2 w-full md:text-justify z-20 justify-start md:border-l-4 border-l-2 h-full space-x-3 py-4">
              <div className="mx-auto ml-2 md:text-4xl text-xl bg-gradient-to-br font-semibold from-text-200 to-bg-100 text-transparent bg-clip-text grayscale hover:grayscale-0">
                ℍ𝕠𝕝𝕝𝕒 𝔽𝕖𝕝𝕝𝕒𝕤, I Am Aji ツ
              </div>
              <div className="mx-auto ml-2 mt-3 md:text-2xl text-lg bg-gradient-to-br font-semibold from-text-200 to-bg-100 text-transparent bg-clip-text grayscale hover:grayscale-0">
                {" "}
                I'm Interested in Becoming a Front-End Web Developer
              </div>
              <div className="flex xl:flex-row flex-col gap-2 mt-24 xl:items-center">
                <div className="md:text-xl text-base bg-gradient-to-br font-semibold from-text-200 to-bg-100 text-transparent bg-clip-text grayscale hover:grayscale-0">
                  For More details, Please Click
                </div>
                <Link href="/about" className="bg-bg-200 px-2 xl:w-auto w-1/5 xl:mt-0 mt-2 text-center rounded-sm py-1 border border-bg-100 border-opacity-60 hover:bg-bg-100 hover:text-slate-900 cursor-pointer bg-opacity-50 underline underline-offset-4">
                  HERE
                </Link>
              </div>
            </div>

            <div
              className={`xl:w-1/2 w-full md:mt-0 xl:mt-20 mt-16 xl:pt-0 pt-20 z-20 drop-shadow-2xl cursor-grab`}
            >
              <Image src="./profil-2.svg" width={800} height={0} className="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailHero
