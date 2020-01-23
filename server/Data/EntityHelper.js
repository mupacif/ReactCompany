module.exports  =function EntityHelper(model, dbHelper){

   var TABLE_NAME  = model.TABLE_NAME
       ,FIELDS = model.FIELDS;

   var CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + "(" + FIELDS.map(function(e){return `${e[0]} ${e[1]}`}).join(',') + ")"
       ,UPGRADE_TABLE = "DROP TABLE " + TABLE_NAME;

   this.create = function(){
        dbHelper.exec(CREATE_TABLE);
   }

   this.upgrade = function(){
        dbHelper.exec(UPGRADE_TABLE);
   }

   this.find = function(values){
        var SELECT = "SELECT * FROM " + TABLE_NAME + " WHERE " +  Object.keys(values).map((key, idx)=> ` ${key} = ${values[key]}`).join(',');
        return dbHelper.exec(SELECT);
   }

   this.insert = function(user){
        var fields = {},
            tab = FIELDS.map(e=>e[0])  
        for(a in user)
            if(tab[a])
                fields[a] = tab[a]

        var INSERT = "INSERT INTO "+ TABLE_NAME + "(" + Object.keys(fields).join(',') + ") VALUE (" + Object.values(fields).join(',') + ")";
        return DbHelper.exec(INSERT);
   }

   this.graphGetter = function(){
        var txt = `${TABLE_NAME} {`+ FIELDS.map(function(e){return `${e[0]} : ${e[2]}`}).join('\n') +`}`;
        return txt;
   } 
   
   this.graphMutation = function(){
        var txt = `create${TABLE_NAME} (`+ FIELDS.map(function(e){return `${e[0]} `}).join(',') +`) : ${TABLE_NAME}`;
        return txt;
   }
}
