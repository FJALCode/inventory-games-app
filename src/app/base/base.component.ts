import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { Location } from '@angular/common';

import { environment } from '../../environments/environment';

import { TraceService } from '../services/trace.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: "base",
  template: ""
})
export class BaseComponent {

  /**
  * Instancia de traceService
  *
  * @property logger
  * @type {TraceService}
  * @memberof BaseComponent
  */
  public logger: TraceService = new TraceService();

  /**
   * Instancia de httpService
   *
   * @property http
   * @type {HttpService}
   * @memberof BaseComponent
   */
  public http: HttpService;

  /**
   * Instancia del servicio de traducción
   * 
   * @property translate
   * @type {TranslateService}
   * @memberof BaseComponent
   */
  public translate: TranslateService

  /**
   * Propiedad que detecta los cambios en la vista
   * 
   * @property changeDetector
   * @type {ChangeDetectorRef}
   * @memberof BaseComponent
   */
  public changeDetector: ChangeDetectorRef;

  /**
   * Propiedad que permite navegar entre vistas
   * 
   * @property router
   * @type {Router}
   * @memberof BaseComponent
   */
  public router: Router;

  public location: Location;



  constructor(
    http: HttpService,
    translate: TranslateService,
    changeDetector: ChangeDetectorRef,
    router: Router,
    location: Location
  ) {
    this.logger.append('BaseComponent.constructor');
    this.logger.testTrace();
    this.http = http;
    this.changeDetector = changeDetector;
    this.translate = translate;
    this.router = router;
    this.location = location;
  }

  /**
   * Método que realizaŕa la traducción
   * 
   * @method makeTranslation
   * @param {string} str
   * @param {string} [value=null]
   * @returns
   * @memberof BaseComponent
   */
  public makeTranslation(str, value = null) {
    this.logger.append('BaseComponent.makeTranslation');
    let val;
    this.translate.get(str, { "value": value }).subscribe((res: string) => {
      val = res;
    });
    return val;
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

  /**
   * Método que manejará el back
   * 
   * @method back
   * @memberof BaseComponent
   */
  public back() {
    this.logger.append("BaseComponent.back");
    this.location.back();
  }

  /**
   * Método que se encarga de realizar la navegación a la ubicación indicada
   * 
   * @method navigate
   * @param {string} str
   * @memberof BaseComponent
   */
  public navigate(str: string) {
    this.logger.append("BaseComponent.navigate");
    this.router.navigate([str]);
  }

}
