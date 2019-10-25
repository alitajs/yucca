module.exports = {
  siteMetadata: {
    title: `yucca`,
    author: `yucca team`,
    description: `page editor`,
    siteUrl: `https://yucca.lotus-ui.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        style: true
      }
    }
  ]
};
