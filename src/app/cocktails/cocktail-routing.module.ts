import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ListCocktailsComponent } from './pages/list-cocktails/list-cocktails.component';

const routes: Routes = [
  {path:'', component:ListCocktailsComponent},
  {path:':id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
