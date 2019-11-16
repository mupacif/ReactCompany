module.exports  = {  
    hello: function(){
        return 'Hihi'
    },
    createUser: function({test}, req){
        return `yup => ${test}`;
    },
    user(){
        return {
            user:'login',
            password:'this is life'
        }
    },
    test: () => 'test1'
}