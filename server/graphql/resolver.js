
module.exports  = {  
    hello: function(){
        return 'Hihi'
    },
    createUsers: function({input}, req){
        return {'id' : input.id};
    },
    user(){
        return {
            user:'login',
            password:'this is life'
        }
    },
    test: () => 'test1'
}