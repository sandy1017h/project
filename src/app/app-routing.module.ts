import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './new/forms/forms.component';
import { BrowserComponent } from './web/browser/browser.component';

const routes: Routes = [
  {path:"",redirectTo:"mainview",pathMatch:"full"},
  {path:"mainview",component:FormsComponent},
  {
    path:"main-vie",
    loadChildren: () =>
    import("./web/web-routing.module").then(
      (m) => m.WebRoutingModule
    ),
  },
  {path:"**",redirectTo:"mainview"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
