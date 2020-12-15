import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit {
	register:any;
	myform!: FormGroup;
	userdata:any;
	rError:any;
	users:any;
	dump:any;
	title = "Account";
	lError:any;
	constructor(private authService: AuthService, private route: ActivatedRoute, private accountService: AccountService, private router:Router, private titleService:Title) { }

	ngOnInit(): void {
		this.myform = new FormGroup({
			username: new FormControl(''),
			password: new FormControl(''),
		});
		this.register = {
			username:'',
			email:'',
			phone:'',
			password:'',
			password1:''
		}; 
		this.userdata = JSON.parse(localStorage.getItem('currentUser')!);
		this.titleService.setTitle(this.title);
	}

	registerUser() {

		this.accountService.registerNewUser(this.register).subscribe(
			response => {
				this.router.navigate(['/']);
				alert('User ' + this.register.username + ' has been created')
				alert('Kindly login with your new Id...')
				
			},
			error => {
				this.rError = "* Kindly check and fill the form"
				
			}

			);
	}

	get f() {
		return this.myform.controls;
	}


	onSubmit() {
		this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
		response => {
			},
		error => {
			this.lError = '* Username or Password is incorrect.';
			console.log(error);
		}


		)		
	}

	onGetUser() {
		this.accountService.getUser().subscribe(
			data => {
				this.dump = data;
			},
			error => {
				alert(error)
			}

			)
	}
}
