import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NGXLogger } from 'ngx-logger';

import { environment } from '../../environments/environment';

import { TraceService } from '../services/trace.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: "base",
  template: ""
})
export class BaseComponent {

  /**
   * Instancia de traceService
   * 
   * @property logger
   * @memberof BaseComponent
   */
  public logger = new TraceService();

  /**
   * Instancia de httpService
   * 
   * @property http
   * @memberof BaseComponent
   */
  public http;

  constructor(http: HttpService) { 
    this.logger.append('BaseComponent.constructor');
    this.logger.testTrace();
    this.http = http;
  }

  /**
   * Método para peticiones get
   *
   * @method httpGet
   * @param {string} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} [headers=null] JSON con los headers requeridos
   * @returns
   * @memberof BaseComponent
   */
  public httpGet(url: string, resolve: any, reject: any, headers: any = null) {
    this.logger.append("BaseComponent.httpGet");
    return this.http.requestGet(url, resolve, reject, headers);
  }

  /**
   * Método para peticiones post
   *
   * @method httpPost
   * @param {string} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} [headers=null] JSON con los headers requeridos
   * @returns
   * @memberof BaseComponent
   */
  public httpPost(url: string, data: any, resolve: any, reject: any, headers: any = null) {
    this.logger.append("BaseComponent.httpPost");
    return this.http.requestPost(url, data, resolve, reject, headers);
  }

  /**
   * Método para peticiones put
   *
   * @method httpPut
   * @param {string} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} [headers=null] JSON con los headers requeridos
   * @returns
   * @memberof BaseComponent
   */
  public httpPut(url: string, resolve: any, reject: any, headers: any = null) {
    this.logger.append("BaseComponent.httpPut");
    return this.http.requestPut(url, resolve, reject, headers);
  }

  /**
   * Método para peticiones delete
   *
   * @method httpDelete
   * @param {string} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} [headers=null] JSON con los headers requeridos
   * @returns
   * @memberof BaseComponent
   */
  public httpDelete(url: string, resolve: any, reject: any, headers: any = null) {
    this.logger.append("BaseComponent.httpDelete");
    return this.http.requestDelete(url, resolve, reject, headers);
  }
}
