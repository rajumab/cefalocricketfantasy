import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {

    constructor(private http: Http) {
    }

    create(entity: any): Promise<any> {
        return this.http.post(`/api/${entity}/${entity}s`, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    createcustom(uri: string,entity:any): Promise<any> {
        return this.http.post(uri, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    get(entity: string): Promise<any> {
        return this.http.get(`/api/${entity}/${entity}s`)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    getcustom(uri: string): Promise<any> {
        return this.http.get(uri)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    delete(entity: string, id: string): Promise<any> {
        return this.http.delete(`/api/${entity}/${id}`)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    deletecustom(uri: string): Promise<any> {
        return this.http.delete(uri)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    edit(entity: any, id: string): Promise<any> {
        return this.http.put(`/api/${entity}/${id}`, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    editcustom(entity: any, uri: string): Promise<any> {
        return this.http.put(uri, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    archive(entity: any, id: string): Promise<any> {
        return this.http.put(`/api/${entity}/${id}`, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    restore(entity: any, id: string): Promise<any> {
        return this.http.put(`/api/${entity}/${id}`, entity)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();

        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
