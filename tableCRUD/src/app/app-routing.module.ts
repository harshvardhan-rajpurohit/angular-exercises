import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayTableComponent } from './display-table/display-table.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TdfComponent } from './tdf/tdf.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:DisplayTableComponent},
  {path:"add",component:InputFormComponent},
  {path:"tdfAdd", component:TdfComponent},
  {path:"edit/:id",component:TdfComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DisplayTableComponent, InputFormComponent,PageNotFoundComponent,TdfComponent]