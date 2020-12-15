import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	api_url: string = "http://localhost:8000/";
	constructor(private http:HttpClient, private router:Router) { }

	login(username: string, password:string) {
		return this.http.post<any>(this.api_url + 'api/auth/',
			{ username, password }, httpOptions).pipe(
				map(user => {
					if (user && user.token) {
						localStorage.setItem("currentUser", JSON.stringify(user));
						this.router.navigate(['/'])
						window.location.reload()	
					}
					else {
						console.log("Error")
					}
					
					return user;
				})

			);	
	}
	logout() {
		localStorage.removeItem('currentUser');
		window.location.reload();

	}
}
