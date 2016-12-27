import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Injectable()

export class TableApiService{


    private _url = "http://ec2-52-90-169-65.compute-1.amazonaws.com";

    constructor(private _http: Http){

    }

    getUsersData(): Observable<any> {
        let user_url = this._url + '/api/users/'
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append("Authorization","Token " + auth_token);
        return this._http.get(user_url,{headers: headers})
            .map(response => response.json())
    }

    getScansData(): Observable<any> {
        let scan_url = this._url + '/api/scans/'
        let headers = new Headers();    
        let auth_token = localStorage.getItem('auth_token');
         console.log(auth_token);
        headers.append("Authorization","Token " + auth_token);
        return this._http.get(scan_url,{headers: headers})
            .map(response => response.json())
    }

    createUser(user: any) {
        let post_user = this._url + '/api/users/'
        let body = JSON.stringify(user);
        let headers = new Headers();
        let auth_token = localStorage.getItem('auth_token');
        headers.append('Content-Type', 'application/json'); 
        headers.append("Authorization","Token " + auth_token);
        return this._http.post(post_user,body,{headers: headers})
            .map(response => response.json())
            .catch(this.handleError)
    }

    private handleError (error: Response | any) {
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