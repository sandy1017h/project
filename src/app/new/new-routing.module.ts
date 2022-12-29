import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:"",redirectTo:"auth",pathMatch:"full"},
  {path:"auth",component:FormsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
