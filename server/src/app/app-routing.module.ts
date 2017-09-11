import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavouritesDisplayComponent} from './favourites-display/favourites-display.component'
import { SearchComponent }   from './search/search.component';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [  
  { path: '', redirectTo:'/welcome', pathMatch:'full'},
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'search',  component: HomeComponent },
  { path: 'favourites',  component: FavouritesDisplayComponent },
  { path: 'register', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'navbar', component:NavbarMenuComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}