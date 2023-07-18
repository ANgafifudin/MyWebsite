import React from "react"
import Link from "next/link"

const DetailAbout = () => {
  return (
    <div>
      <section>
        <div className="xl:container md:pt-24 pt-24 text-text-200 w-11/12 flex pb-10">
          <div className="w-full container flex flex-col justify-start">
            {/*awal about me */}
            <div className="xl:text-2xl text-xl font-extralight grayscale hover:grayscale-0">
              About Me/&gt;
            </div>
            <div className="pt-2.5 pl-2 grayscale hover:grayscale-0">
              <div className="bg-primary-200 h-3 w-3 rounded-full -mb-1 "></div>
              <div className="border-l-2 border-l-primary-200 ml-[5px] pl-3 flex flex-col py-2">
                <div className="flex flex-col gap-1 items-baseline">
                  <div className="font-bold md:text-xl text-primary-100">
                    class{" "}
                    <span className="text-primary-200">Aji Ngafifudin</span>{" "}
                    &#123;
                  </div>
                  <div className="md:text-xl text-neutral-500 pl-5">
                    // I can and I do <br />
                    // life-long learning is what I want
                  </div>
                  {/*awal cunstructor */}
                  <div className="font-bold md:text-xl text-primary-100 pl-5">
                    constructor{" "}
                    <span className="text-neutral-400">&#40;&#41;</span> &#123;
                  </div>
                  <div className="md:text-xl pl-8 grayscale hover:grayscale-0 hover:text-white">
                    <div>
                      this.<span className="text-accent-100">name</span> ={" "}
                      <span className="text-primary-200">"Aji Ngafifudin"</span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">birthDay</span> ={" "}
                      <span className="text-primary-200">20012706</span>
                    </div>
                    <div>
                      this.<span className="text-accent-100">email</span> ={" "}
                      <span className="text-primary-200 hover:underline hover:underline-offset-4">
                        <Link href="mailto:ajingafifudin@gmail.com">
                          "ajingafifudin@gmail.com"
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="md:text-xl font-bold text-primary-100 pl-5">
                    &#125;
                  </div>
                  {/*akhir constructor */}
                  {/*awal organisationExperience */}
                  <div className="font-bold md:text-xl text-primary-100 pl-5">
                    organisationExperience{" "}
                    <span className="text-neutral-400">&#40;&#41;</span> &#123;
                  </div>
                  <div className="md:text-xl hover:text-accent-200 pl-8">
                    return <span className="hover:text-white">&#91;</span>
                  </div>
                  <div className="md:text-xl pl-14 grayscale hover:grayscale-0 hover:text-white">
                    <div>
                      &#123;<span className="text-primary-200">"2021"</span> :{" "}
                      <span className="text-primary-200">
                        "Satuan Tugas Penanganan COVID-19 Bidang Perubahan
                        Perilaku - Member"
                      </span>
                      &#125;
                    </div>
                    <div>
                      &#123;
                      <span className="text-primary-200">"2022 - Present"</span>{" "}
                      :{" "}
                      <span className="text-primary-200">
                        "Google Developer Student Clubs Universitas Negeri
                        Surabaya - Member"
                      </span>
                      &#125;
                    </div>
                  </div>
                  <div className="md:text-xl hover:text-white pl-8">&#93;</div>
                  <div className="md:text-xl font-bold text-primary-100 pl-5">
                    &#125;
                  </div>
                  {/*akhir organisationExperience */}
                  {/*awal educationLevel */}
                  <div className="font-bold md:text-xl text-primary-100 pl-5">
                    educationLevel{" "}
                    <span className="text-neutral-400">&#40;&#41;</span> &#123;
                  </div>
                  <div className="md:text-xl hover:text-accent-200 pl-8">
                    return <span className="hover:text-white">&#91;</span>
                  </div>
                  <div className="md:text-xl pl-14 grayscale hover:grayscale-0 hover:text-white">
                    <div>
                      &#123;<span className="text-primary-200">"2020 - Present"</span> :{" "}
                      <span className="text-primary-200">
                        "State University of Surabaya - Informatics Engineering"
                      </span>
                      &#125;
                    </div>
                    <div>
                      &#123;
                      <span className="text-primary-200">"2023"</span>{" "}
                      :{" "}
                      <span className="text-primary-200">
                        "Binar Academy - Fullstack Web Developer"
                      </span>
                      &#125;
                    </div>
                  </div>
                  <div className="md:text-xl hover:text-white pl-8">&#93;</div>
                  <div className="md:text-xl font-bold text-primary-100 pl-5">
                    &#125;
                  </div>
                  {/*akhir educationLevel */}
                  {/*awal skills */}
                  <div className="font-bold md:text-xl text-primary-100 pl-5">
                    skills{" "}
                    <span className="text-neutral-400">&#40;&#41;</span> &#123;
                  </div>
                  <div className="md:text-xl hover:text-accent-200 pl-8">
                    return <span className="hover:text-white">&#91;</span>
                  </div>
                  <div className="md:text-xl pl-14 grayscale hover:grayscale-0 hover:text-white">
                    <div>
                      &#123;
                      <span className="text-primary-200">
                        "HTML/CSS/JS", "Bootstrap/Tailwind", "Express.js", "Node.js", "React.js", "Next.js", "NPM/Yarn", "PostgreSQL", "Netlify", "Figma", "Postman", "Canva", "Notion", "Trello"<span className="animate-ping">|</span>
                      </span>
                      &#125;
                    </div>
                    
                  </div>
                  <div className="md:text-xl hover:text-white pl-8">&#93;</div>
                  <div className="md:text-xl font-bold text-primary-100 pl-5">
                    &#125;
                  </div>
                  {/*akhir skills */}
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

export default DetailAbout
