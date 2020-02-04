const validateToken = require('./../validateToken');

const productResolvers = {
  Query: {
    products: async (_, data, { models }) => {
      return models.Product.findAll();
    },

    product: async (_, { id }, { models}) => {
      return models.Product.findOne({
        where: {
          id: id
        }
      });
    }
  },

  Mutation: {
    createProduct: async (_, { product }, { models, token }) => {
      await validateToken(token);

      return models.Product.create(product);
    },

    updateProduct: async (_, { product, id }, { models, token }) => {
      await validateToken(token);

      const updatedProduct = await models.Product.update(
        product,
        { where: {
          id: id
        }}
      );

      return updatedProduct[0];

      
    }
  }
}

module.exports = productResolvers;