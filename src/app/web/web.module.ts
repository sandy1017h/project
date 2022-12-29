import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserComponent } from './browser/browser.component';
import { MaterialModule } from '../@shared/material/material.module';


@NgModule({
  declarations: [
    BrowserComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class WebModule { }
