import React from "react"
import BackToTopButton from "../BackToTopButton"
import Layout from "../Layout"
import Navbar from "../Navbar"
import DetailHero from "./DetailHero"

const Hero = () => {
  return (
    <Layout>
      <div className="container mx-auto md:pb-20 py-5">
        <Navbar />
        <DetailHero />
      </div>
      <BackToTopButton />
    </Layout>
  )
}

export default Hero
