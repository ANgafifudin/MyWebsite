import React from "react"
import Layout from "../Layout"
import Navbar from "../Navbar"
import DetailPortfolio from "./DetailPortfolio"

const Portfolio = () => {
  return (
    <Layout className="">
      <div className="container mx-auto py-5">
        <Navbar />
        <DetailPortfolio />
        
      </div>
    </Layout>
  )
}

export default Portfolio
