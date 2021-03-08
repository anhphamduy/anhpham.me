module.exports = {
  findPaths: async (ctx) => {
    const result = await strapi
      .query("blog-post")
      .model.find({})
      .select("snippet name createdAt slug");
    ctx.send(result);
  },
};
