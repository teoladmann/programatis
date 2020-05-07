import React from "react";
import {graphql} from 'gatsby';

import Layout from "../layout";
import Section from "../components/Section";
import Article from "../components/Article";

const Home = ({ data }) => {

  return (
    <Layout>
      <div className="welcome">
          <h1>Hola <span role="img" aria-label="Emoji Saludo">👋</span></h1>
          <h2 className="subheading">Aprende a programar gratis <span role="img" aria-label="Flecha Abajo">⬇️</span></h2>
      </div>
      <Section>
        {data.allMarkdownRemark.edges.map((edge, key) => (
          <Article key={key} edge={edge} />
        ))}
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query queryHome {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home;