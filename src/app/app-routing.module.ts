import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './user/components/login-form/login-form.component';
import { RegisterFormComponent } from './user/components/register-form/register-form.component';
import { UserProfileFormComponent } from './user/components/user-profile-form/user-profile-form.component';

const routes: Routes = [
  {path:'login', component:LoginFormComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'register', component:RegisterFormComponent},
  {path:'cocktail', loadChildren: () => import('./cocktails/cocktail.module').then(m => m.CocktailModule)},
  {path:'profile', component:UserProfileFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
