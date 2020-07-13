import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddprodComponent } from './addprod/addprod.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'addprod', component:AddprodComponent},
  {path:'display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
