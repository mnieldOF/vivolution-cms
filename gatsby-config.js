/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Vivolution`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // TODO: Replace with GA4 Measurement ID (format: G-XXXXXXXXX)
        // Create a GA4 property at analytics.google.com to get this ID
        trackingId: `G-XXXXXXXXX`,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
