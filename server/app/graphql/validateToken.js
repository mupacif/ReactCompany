const jwt = require('jsonwebtoken');

const validateToken = async (token) => {
  	if (!token){
  		throw new Error("No Api token provided")
  	}

  	const validToken = await jwt.verify(token, "graphql", (err, decoded) => {
  		if (err){
  			throw new Error('Authentication failed, token is not valid')
      }
    });

    return validToken;
    
}

module.exports = validateToken;