import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './@shared/material/material.module';
import { ManagerComponent } from './manager/manager.component';
import { NewModule } from './new/new.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NewModule,
    WebModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
