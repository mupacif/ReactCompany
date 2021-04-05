import Parse from 'parse';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export default class ParseService {

    parse;
    config =  {
      appId: 'myAppId',
      masterKey: 'myMasterKey',
      serverUrl : 'http://tests.pacee.net/react/parse'
    };
  
  
    constructor() {
      this.parse = Parse;
      this.parse.initialize(this.config.appId, '', this.config.masterKey);
      this.parse.serverURL = this.config.serverUrl;
    }

    /***
     * Update 1 field
     */
    async update(tableName, key, field, value) {
      const table = this.parse.Object.extend(tableName);
      const query = new Parse.Query(table);
      query.get( key);
      const result = await query.first();
      result.set(field, value);
      result.save();
    }
  

    /**
     * add 1 item into a table/create it if it doesnt exists
     */
  async addItem(tableName, elt, user) {
    const table = this.parse.Object.extend(tableName);
    const obj = new table();

    for ( const key in elt){
      if ( elt.hasOwnProperty(key) ) {
        obj.set(key, elt[key]);
      }
    }

    if ( user ){
      obj.set("user", user);
    }
    
    const ret = await obj.save()
    return {id: ret.id, ...ret.attributes};
  }
  

  getAll(tableName, usr) {

    const table = this.parse.Object.extend(tableName);
    const query = new Parse.Query(table);
    if ( usr ){
      query.equalTo("user", usr);
    }
    const results = query.find();
    // @ts-ignore
    return from(results).pipe(map(e => e.map(u => ({id: u.id, ...u.attributes, parseObj: u})).reverse()));
  }

    getParse() {
      return this.parse;
    }
    

    async delete(tableName, key) {
      const table = this.parse.Object.extend(tableName);
      const query = new Parse.Query(table);
      query.get( key);
      const result = await  query.first();
      if ( result )
      result.destroy();
    }

  }
  