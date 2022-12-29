import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeveloperComponent } from '../developer/developer.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor( private _nextdialog:MatDialog) { }

  ngOnInit(): void {
  }
  OnClickNext(){
    this._nextdialog.open(DeveloperComponent,{
      panelClass:"full-screen-dialog"
    })
  }
}
