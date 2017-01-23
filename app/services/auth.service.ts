import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Injectable()

export class AuthService{

    private _url = "http://ec2-52-90-169-65.compute-1.amazonaws.com/rest-auth/login/";

    constructor(private _http: Http){

    }

    private tokenKey:string = 'auth_token';

    private store(content:string) {
        let storedToken:string = localStorage.getItem('auth_token');
        if(storedToken){
        localStorage.setItem('auth_token', '');
        }
        localStorage.setItem('auth_token', content);
    }

    private retrieve() {
        let storedToken:string = localStorage.getItem('auth_token');
        if(!storedToken) throw 'no token found';
        return storedToken;
    }

    login() {
        let email: string = 'admin@localhost';
        let password: string = 'admin';
        let headers = new Headers();
        let body = '{"email":"' + email + '","password":"' + password + '"}';
        headers.append("Content-Type", "application/json");

        return this._http.post(this._url,body,{headers: headers})
            .map(response => response.json())
            .subscribe(data => {
                this.store(data.key);
                })
    }

}