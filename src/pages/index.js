import React from 'react';
import App from '../components/app';

const Main = ({data}) => {
  return (
    <App data={data}></App>
  );
};

export default Main;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulRestaurant(filter: {city: {eq: "Toronto"}}) {
      edges {
        node {
          name
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          location {
            lat
            lon
          }
          link
          tags
          hasDelivery
          hasPickup
          deliveryHours {
            Monday {
              open
              closed
            }
            Tuesday {
              open
              closed
            }
            Wednesday {
              open
              closed
            }
            Thursday {
              open
              closed
            }
            Sunday {
              open
              closed
            }
            Saturday {
              open
              closed
            }
            Friday {
              open
              closed
            }
            Everyday {
              open
              closed
            }
          }
        }
      }
    }
    allContentfulHero {
      edges {
        node {
          name
          image {
            file {
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
