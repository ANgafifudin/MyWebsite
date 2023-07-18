import React from "react"
import BackToTopButton from "../BackToTopButton"
import Layout from "../Layout"
import Navbar from "../Navbar"
import DetailAbout from "./DetailAbout"


const About = () => {
  return (
    <Layout className=""> 
      <div className="container mx-auto py-5">
      <Navbar />
      <DetailAbout/>
      </div>
      <BackToTopButton/>
    </Layout>
  )
}

export default About
