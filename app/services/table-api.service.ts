import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()

export class TableApiService {


    private _url = "http://ec2-52-90-169-65.compute-1.amazonaws.com";

    constructor(private _http: Http) {

    }

    getCompanies(): Observable<any> {
        let user_url = this._url + '/api/companies/'
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.get(user_url, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    getUsersData(pageNum?:number): Observable<any> {
          let query = '';
        if(pageNum != undefined && pageNum != null){
            query = '?page=' + pageNum;
        }else{
            query = '';
        }

        let user_url = this._url + '/api/users/' + query;
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.get(user_url, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    getUser(id: number): Observable<any> {
        let user_url = this._url + '/api/users/' + id + '/'
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.get(user_url, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    getScansData(since?: string, search?: string, pageNum?:number, ordering?:string): Observable<any> {
        let query = '';
        if ((since != undefined && since != '') && (search != undefined && search != '')) {
            query = '?since=' + since + '&search=' + search;
        }else if(search != undefined && search != ''){
            query = '?search=' + search;
        }else if((pageNum != undefined && pageNum != null && pageNum > 1) && (ordering != undefined && ordering != '')){
            query = '?page=' + pageNum + '&ordering=' + ordering;
        }else if(pageNum != undefined && pageNum != null && pageNum > 1){
            query = '?page=' + pageNum;
        }else if(ordering != undefined && ordering != ''){
            query = '?ordering=' + ordering;
        }else{
            query = '';
        }

        let scan_url = this._url + '/api/scans/' + query;
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.get(scan_url, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    createUser(user: any) {
        let post_user = this._url + '/api/users/'
        let body = JSON.stringify(user);
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.post(post_user, body, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }
    updateUser(user: any, id: number) {
        let patch_user = this._url + '/api/users/' + id + '/';
        let body = JSON.stringify(user);
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Token " + auth_token);
        return this._http.patch(patch_user, body, { headers: headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}