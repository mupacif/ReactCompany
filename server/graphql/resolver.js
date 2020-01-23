const User = require('../Data/model/Users')
const Sequelize = require('sequelize');
module.exports  = {  
    users: function({input}, req){
        console.log(new Date());
        console.log(input);
        return User.findOne(
            {
                where :{
                    [Sequelize.Op.or] : [
                        {firstName: input.firstName},
                        {lastName: input.lastName},
                        {email:input.email},
                        {username: input.username},
                        {password:input.password}
                    ]
                }
            }   
        )
    },
    createUsers: function({input}, req){
       return  User.create({
            firstName: input.firstName,
            lastName: input.lastName,
            email:input.email,
            username: input.username,
            password:input.password
        })
    }
    // user: function({userInput}, req){
    //     return {              
    //                     firstName: userInput.firstName,
    //                     lastName: userInput.lastName,
    //                     email:userInput.email,
    //                     username: userInput.username,
    //                     password:userInput.password
    //     }
    // }
    // ,
    // createUsers: function({input}, req){
    //    return  {
    //         firstName: input.firstName,
    //         lastName: input.lastName,
    //         email:input.email,
    //         username: input.username,
    //         password:input.password
    //     }
    // }    
}