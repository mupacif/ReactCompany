var mysql = require('mysql2');
var keys = require('../keys');
module.exports  =function DbHelper(){
    DB_VERSION = 1;
    var connection = mysql.createConnection({
        host     : keys.host,
        user     : keys.user,
        password : keys.password,
        database : keys.host
    });

    this.exec= function(query){
        connection.connect();
        connection.query(query, function (error, results) {
        if (error) throw error;
            return results;
        });
        connection.end();  
    }
 }


 