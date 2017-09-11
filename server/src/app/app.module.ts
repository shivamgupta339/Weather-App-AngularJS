import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms' 
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './search/search.component';
import {SearchService} from './search/search.service';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { AppRoutingModule }     from './app-routing.module';
import { FavouritesDisplayComponent } from './favourites-display/favourites-display.component';
import { UpdateFavComponent } from './update-fav/update-fav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarBeforeComponent } from './navbar-before/navbar-before.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
  AppComponent,
  SearchComponent,
  SearchListComponent,
  SearchDetailComponent,
  NavbarMenuComponent,
  FavouritesDisplayComponent,
  UpdateFavComponent,
  HomeComponent,
  LoginComponent,
  SignupComponent,
  WelcomeComponent,
  NavbarBeforeComponent,
  FooterComponent
  ],
  imports: [  
  BrowserModule,
  FormsModule,
  NgxPaginationModule,
  HttpModule,
  NgbModule.forRoot(),
  AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
