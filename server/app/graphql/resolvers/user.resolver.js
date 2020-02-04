const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolvers = {
  Query: {
    users: async (_, data, context) => {
      const { models, token } = context;
      return models.User.findAll();
    },
    
    login: async (_, data, context) => {
      const { email, password } = data.user;
      const { models } = context;

      const user = await models.User.findOne({
        where: {
          email: email
        }
      });

      if (user) {
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (passwordIsValid) {
          var token = jwt.sign({ id: user.id }, "graphql", {
            expiresIn: 86400 // expires in 24 hours
          });
  
          return {
            userId: user.id,
            token: token
          }
        } else {
          throw new Error('Password is not valid');
        }
      } else {
        throw new Error("User dont exist");
      }
    }
  },

  Mutation: {
    register: async (_, data, context) => {
      const { models } = context;
      const user = data.user;

      const existingUser = await models.User.findOne({
        where: {
          email: user.email
        }
      });

      if (!existingUser) {
        user.password = bcrypt.hashSync(user.password, 8);
    
        //Create user
        const newUser = await models.User.create(user);

        var token = jwt.sign({ id: newUser.id }, "graphql", {
          expiresIn: 86400 // expires in 24 hours
        });

        return {
          userId: newUser.id,
          token: token
        }

        //
      } else {
        throw new Error('User with this email already exist')
      }
    }
  },

  User: {
    async posts (user) {
        return user.getPosts()
    }
  }


};

module.exports = userResolvers;