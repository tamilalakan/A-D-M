import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
	api_url = "http://127.0.0.1:8000/user/";
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	constructor(private http: HttpClient) { }

	registerNewUser(userData:any): Observable<any> {
		return this.http.post('http://127.0.0.1:8000/user/', userData)

	}
	getUser() {
		return this.http.get(this.api_url, {headers:this.httpHeaders});
	}



}
