import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
	title = "Account";
	userdata:any;

  constructor(private titleService:Title) { }

  ngOnInit(): void {
  	this.titleService.setTitle(this.title);
  	this.userdata = JSON.parse(localStorage.getItem('currentUser')!);
  }

}
