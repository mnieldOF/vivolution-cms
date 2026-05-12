/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Vivolution`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // TODO: Replace with GA4 Measurement ID (format: G-XXXXXXXXX)
        // Create a GA4 property at analytics.google.com to get this ID
        trackingIds: [`G-XXXXXXXXX`],
        pluginConfig: {
          head: true,
        },
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
        environment: process.env.DATO_ENVIRONMENT || "dev",
      },
    },
  ],
};
