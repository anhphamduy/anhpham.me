module.exports = {
  findPaths: async (ctx) => {
    const result = await strapi
      .query("blog-post")
      .model.fetchAll({ columns: ["id", "published_at", "name", "snippet"] }); // here we wait for one column only
    ctx.send(result);
  },
};
