import React from "react"
import Link from "next/link"

const DetailPortfolio = ({
  classWebsite,
  nameWebsite,
  descriptionWebsite,
  typeWebsite,
  createdWebsite,
  linkWebsite,
}) => {
  return (
    <div>
      <section>
        <div>
          <div>
            {/*awal about me */}

            <div>
              <div >
                <div className="flex flex-col gap-1 items-baseline">
                 
                  {/*awal cunstructor-1 */}
                  <div className="font-bold md:text-xl text-primary-100 pl-5">
                    {classWebsite}{" "}
                    <span className="text-neutral-400">&#40;&#41;</span> &#123;
                  </div>
                  <div className="md:text-xl pl-8 grayscale hover:grayscale-0 hover:text-white">
                    <div>
                      this.<span className="text-accent-100">nameWebsite</span>{" "}
                      ={" "}
                      <span className="text-primary-200">"{nameWebsite}"</span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">Description</span>{" "}
                      ={" "}
                      <span className="text-primary-200">
                        "{descriptionWebsite}"
                      </span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">Created</span> ={" "}
                      <span className="text-primary-200">
                        <span>{createdWebsite}</span>
                      </span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">typeWebsite</span>{" "}
                      ={" "}
                      <span className="text-primary-200">
                        <span>"{typeWebsite}"</span>
                      </span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">Link</span> ={" "}
                      <span className="text-primary-200 hover:underline hover:underline-offset-4">
                        <Link href={linkWebsite} passHref target="_blank">
                          Click Here
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="md:text-xl font-bold text-primary-100 pl-5">
                    &#125;
                  </div>
                  {/*akhir constructor */}
                </div>
              </div>
              
            </div>
          </div>
          {/*akhir about me */}
        </div>
      </section>
    </div>
  )
}

export default DetailPortfolio
