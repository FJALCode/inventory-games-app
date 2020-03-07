import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from '../../environments/environment';


// import { environmentPro } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class TraceService {
  
  constructor() { }

  append(str: String) {
    if (environment.DEBUG && !environment.production) {
      setTimeout(() => {
        console.log(moment().format('LLL').toString() + ": " + str)
      }, 1)
    }
  }

  testTrace() {
    
    // this.logger.debug('----')
    // this.logger.debug("Debug message");
    // this.logger.info("Info message");
    // this.logger.log("Default log message");
    // this.logger.warn("Warning message");
    // this.logger.error("Error message");
  }
}
