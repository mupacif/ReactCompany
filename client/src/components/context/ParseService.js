import Parse from 'parse';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export default class ParseService {

    parse;
    config =  {
      appId: '${{ secrets.PARSEID }}',
      masterKey: '${{ secrets.PARSEMASTERKEY }}',
      serverUrl : '${{ secrets.PARSESERVERURL }}'
    };
  
  
    constructor() {
      this.parse = Parse;
      this.parse.initialize(this.config.appId, '', this.config.masterKey);
      this.parse.serverURL = this.config.serverUrl;
    }
  
    getParse() {
      return this.parse;
    }
    
  }
  