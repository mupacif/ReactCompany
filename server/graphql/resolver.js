const User = require('../Data/model/Users')
module.exports  = {  
    user: function({userInput}, req){
        return User.findAll(
            {
                where :{
                    [Op.or] : [
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