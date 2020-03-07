import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
    * Método para peticiones Get
    * 
    * @method requestGet
    * @param {String} url Dirección del API a consultar
    * @param {any} resolve Función en caso de éxito
    * @param {any} reject Función en caso de error
    * @param {any} headers JSON con los headers requeridos
    * @memberof HttpService
   */
  public requestGet(url, resolve, reject, headers) {
    this.http.get(encodeURI(url), { headers: headers })
      .subscribe((result) => {
        resolve(result);
      }, (error) => {
        if (!error.status) {
          let message = "service_error";
          error.error.message = message;
          error.translate = true;
        }
        reject && reject(error);
      });
  }

  /**
   * Método para peticiones Post
   *
   * @method requestPost
   * @param {String} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} headers JSON con los headers requeridos
   * @memberof HttpService
   */
  public requestPost(url, data, resolve, reject, headers) {
    this.http.post(encodeURI(url), data, { headers: headers })
      .subscribe((result) => {
        resolve(result);
      }, (error) => {
        if (!error.status) {
          let message = "service_error";
          error.error.message = message;
          error.translate = true;
        }
        reject && reject(error);
      });
  }

  /**
   * Método para peticiones Put
   *
   * @method requestPut
   * @param {String} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} headers JSON con los headers requeridos
   * @memberof HttpService
   */
  public requestPut(url, resolve, reject, headers) {
    this.http.put(encodeURI(url), { headers: headers })
      .subscribe((result) => {
        resolve(result);
      }, (error) => {
        if (!error.status) {
          let message = "service_error";
          error.error.message = message;
          error.translate = true;
        }
        reject && reject(error);
      });
  }

  /**
   * Método para peticiones Delete
   *
   * @method requestDelete
   * @param {String} url Dirección del API a consultar
   * @param {any} resolve Función en caso de éxito
   * @param {any} reject Función en caso de error
   * @param {any} headers JSON con los headers requeridos
   * @memberof HttpService
   */
   public requestDelete(url, resolve, reject, headers){
    this.http.delete(encodeURI(url), {headers: headers})            
        .subscribe((result) => {
            resolve(result);
        }, (error) => {
            if(!error.status){
                let message = "service_error";
                error.error.message = message;
                error.translate = true;
            }
            reject && reject(error);
        });
}






}
