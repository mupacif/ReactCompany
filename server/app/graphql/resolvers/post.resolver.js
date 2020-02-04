const validateToken =require('./../validateToken');

const postResolvers = {
  Query: {
    posts: async (_, data, context) => {
      const { models, token } = context;
      
      await validateToken(token);

      return models.Post.findAll();
    }
  },

  Post: {
    async user (post) {
        return post.getUser()
    }
}
}

module.exports = postResolvers;