import React from "react"
import DetailPortfolio from "./DetailPortfolio"
const ImportProjectPersonal = () => {
  return (
    <div className="xl:container md:pt-24 pt-24 text-text-200 w-11/12 flex pb-10">
      <div className="w-full container flex flex-col justify-start">
        <div className="xl:text-2xl text-xl font-extralight grayscale hover:grayscale-0">
          Project/&gt;
        </div>
        <div className="pt-2.5 pl-2 grayscale hover:grayscale-0">
          <div className="bg-primary-200 h-3 w-3 rounded-full -mb-1 "></div>
          <div className="border-l-2 border-l-primary-200 ml-[5px] pl-3 flex flex-col py-2">
            <div className="font-bold md:text-xl text-primary-100">
              class <span className="text-primary-200">myProject</span> &#123;
            </div>
            <div className="md:text-xl text-neutral-500 pl-5">
              // My-Project <br />
              // I can, I do
            </div>
            <DetailPortfolio
            classWebsite="Cakil"
              nameWebsite="Cakil"
              descriptionWebsite="Cakil is a static website that contains small notes from Aji"
              typeWebsite="Personal"
              createdWebsite="2022"
              linkWebsite="https://cakil.netlify.app/"
            />
            <DetailPortfolio
            classWebsite="cupOT"
              nameWebsite="CupOT"
              descriptionWebsite="CupOT is a website used to order tea leaf"
              typeWebsite="Team"
              createdWebsite="2022"
              linkWebsite="https://cupot.vercel.app/"
            />
            <DetailPortfolio
            classWebsite="binarCarRental"
              nameWebsite="Binar Car Rental"
              descriptionWebsite="Binar car rental is a website used to book or rent a car"
              typeWebsite="Personal"
              createdWebsite="2023"
              linkWebsite="https://aji-binar-car-rental.vercel.app/"
            />
            <DetailPortfolio
            classWebsite="Pokedex"
              nameWebsite="Pokedex"
              descriptionWebsite="Pokedex is a pokemon list website in which there are several attributes possessed by each pokemon"
              typeWebsite="Team"
              createdWebsite="2023"
              linkWebsite="https://pokedex-aji.vercel.app/"
            />
            <DetailPortfolio
            classWebsite="FlyWise"
              nameWebsite="FlyWise"
              descriptionWebsite="FlyWise is a website used to book airline tickets"
              typeWebsite="Team"
              createdWebsite="2023"
              linkWebsite="https://fe-flywise-jcbxz3zpbq-as.a.run.app/"
            />
            
          </div>
          <div className="bg-primary-200 h-3 w-3 rounded-full -mb-1"></div>
        </div>
      </div>
    </div>
  )
}

export default ImportProjectPersonal
