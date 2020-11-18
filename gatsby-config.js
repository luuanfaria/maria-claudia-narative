module.exports = {
  siteMetadata: {
    title: `Maria Claudia`,
    name: `Maria Claudia`,
    siteUrl: `https://novela.narative.co`,
    description: `Portfolio profissional Maria Claudia`,
    hero: {
      heading: `Página profissional, encontre publicações e projetos acadêmicos.`,
      maxWidth: 652,
      fontSize: 25,
    },
    social: [
      {
        name: `lattes`,
        url: `http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4796270A6`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/maria-claudia-castro-52741a18/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maria Claudia`,
        short_name: `Maria Claudia`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
