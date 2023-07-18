import React from "react"
import Link from "next/link"

const DetailPortfolio = () => {
  return (
    <div>
    <section>
    <div className="xl:container md:pt-24 pt-24 text-text-200 w-11/12 flex pb-10">
      <div className="w-full container flex flex-col justify-start">
        {/*awal about me */}
        <div className="xl:text-2xl text-xl font-extralight grayscale hover:grayscale-0">
          Project - Personal/&gt;
        </div>
        <div className="pt-2.5 pl-2 grayscale hover:grayscale-0">
          <div className="bg-primary-200 h-3 w-3 rounded-full -mb-1 "></div>
          <div className="border-l-2 border-l-primary-200 ml-[5px] pl-3 flex flex-col py-2">
            <div className="flex flex-col gap-1 items-baseline">
              <div className="font-bold md:text-xl text-primary-100">
                class{" "}
                <span className="text-primary-200">Personal</span>{" "}
                &#123;
              </div>
              <div className="md:text-xl text-neutral-500 pl-5">
                // My-Personal Project <br />
                // I can, I do
              </div>
              {/*awal cunstructor-1 */}
              <div className="font-bold md:text-xl text-primary-100 pl-5">
                Cakil{" "}
                <span className="text-neutral-400">&#40;&#41;</span> &#123;
              </div>
              <div className="md:text-xl pl-8 grayscale hover:grayscale-0 hover:text-white">
                <div>
                  this.<span className="text-accent-100">nameWebsite</span> ={" "}
                  <span className="text-primary-200">"Cakil"</span>
                </div>
                <div>
                  this.<span className="text-accent-100">Description</span> ={" "}
                  <span className="text-primary-200">"Cakil is a static website that contains small notes from Aji"</span>
                </div>
                <div>
                  this.<span className="text-accent-100">Created</span> ={" "}
                  <span className="text-primary-200 hover:underline hover:underline-offset-4">
                    <span>
                    2022
                    </span>
                  </span>
                </div>
                <div>
                  this.<span className="text-accent-100">Link</span> ={" "}
                  <span className="text-primary-200 hover:underline hover:underline-offset-4">
                    <Link href="">
                    Click Here
                    </Link>
                  </span>
                </div>
              </div>
              <div className="md:text-xl font-bold text-primary-100 pl-5">
                &#125;
              </div>
              {/*akhir constructor */}
              {/*awal cunstructor-1 */}
              <div className="font-bold md:text-xl text-primary-100 pl-5">
                binarCarRental{" "}
                <span className="text-neutral-400">&#40;&#41;</span> &#123;
              </div>
              <div className="md:text-xl pl-8 grayscale hover:grayscale-0 hover:text-white">
                <div>
                  this.<span className="text-accent-100">nameWebsite</span> ={" "}
                  <span className="text-primary-200">"Binar Car Rental"</span>
                </div>
                <div>
                  this.<span className="text-accent-100">Description</span> ={" "}
                  <span className="text-primary-200">"Cakil is a static website that contains small notes from Aji"</span>
                </div>
                <div>
                  this.<span className="text-accent-100">created</span> ={" "}
                  <span className="text-primary-200 hover:underline hover:underline-offset-4">
                    <span>
                    2020
                    </span>
                  </span>
                </div>
              </div>
              <div className="md:text-xl font-bold text-primary-100 pl-5">
                &#125;
              </div>
              {/*akhir constructor 2*/}
            </div>
          </div>
          <div className="bg-primary-200 h-3 w-3 rounded-full -mb-1"></div>
        </div>
      </div>
      {/*akhir about me */}
    </div>
  </section>
    </div>
  )
}

export default DetailPortfolio
