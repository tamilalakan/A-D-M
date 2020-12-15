import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AccountViewComponent } from './account-view/account-view.component'
const routes: Routes = [
	{ path:'', redirectTo: '/home' ,pathMatch:'full', data: {title: 'Home'} },
	{ path:'login', component: AccountComponent, data: {title: 'Login'}},
	{ path:'home', component: HomeComponent, data: {title: 'Home'} },
	{ path:'account', component:AccountViewComponent  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
