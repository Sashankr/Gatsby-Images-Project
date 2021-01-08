import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from 'gatsby-image';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Img fluid={data.airportGatsbyImage.childImageSharp.fluid} alt="airport image"/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query =  graphql`

query{
  airportGatsbyImage : file(relativePath: {eq: "airport.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`