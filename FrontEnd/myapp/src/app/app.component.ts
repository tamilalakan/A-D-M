import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  userdata:any;

  constructor(private aService: AccountService, private authService: AuthService) { }

  

  ngOnInit(): void {  
   	this.userdata = JSON.parse(localStorage.getItem('currentUser')!);
   }

  logout() {
    this.authService.logout();
  }



}
