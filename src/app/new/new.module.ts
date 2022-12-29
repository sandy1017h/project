import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { FormsComponent } from './forms/forms.component';
import { MaterialModule } from '../@shared/material/material.module';
import { RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormsComponent,
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  
  
    
    
  ]
})
export class NewModule { }
