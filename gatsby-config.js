module.exports = {
  siteMetadata: {
    title: 'Technical Blog',
  },
  plugins: [
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@rajatchaudhary`,
        limit: 200,
      },
    },
  ],
}
