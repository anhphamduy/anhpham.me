module.exports = {
  findPaths: async (ctx) => {
    const result = await strapi
      .query("blog-post")
      .model.find({})
      .select("snippet name created_at");
    ctx.send(result);
  },
};
