import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    constructor(
        private http: Http
    ) { }
    /**
     * Get
     *
     * @param {string} resorce
     * @param {string} [search_by] {term}
     * @returns {Promise<any[]>}
     * @memberof HttpService
     */
    get(resorce: string, search_by?: { term?: string }): Promise<any[]> {
        let parameter = '';
        if (search_by) {
            if (search_by.term) {
                parameter = `/?search=${search_by.term}`;
            }
        }
        return this.http.get(
            `${resorce}${parameter}`,
            {
                headers: this.headers
            }
        ).toPromise().then(response => response.json()).catch(this.handleError);
    }
    /**
     * Error
     *
     * @private
     * @param {*} error
     * @returns {Promise<any>}
     * @memberof HttpService
     */
    private handleError(error: any): Promise<any> {
        alert(`An error occurred\n ${error}`);
        return Promise.reject(error.message || error);
    }

}
