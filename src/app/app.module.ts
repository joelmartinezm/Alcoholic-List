import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './user/pages/login/login.component';
import { RegisterComponent } from './user/pages/register/register.component';
import { RegisterFormComponent } from './user/components/register-form/register-form.component';
import { LoginFormComponent } from './user/components/login-form/login-form.component';
import { UserProfileFormComponent } from './user/components/user-profile-form/user-profile-form.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';
import { ListCocktailsComponent } from './cocktails/pages/list-cocktails/list-cocktails.component';
import { DetailComponent } from './cocktails/pages/detail/detail.component';
import { CocktailModule } from './cocktails/cocktail.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginFormComponent,
    UserProfileFormComponent,
    UserProfileComponent,
    ListCocktailsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CocktailModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
