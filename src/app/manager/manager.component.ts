import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsComponent } from '../new/forms/forms.component';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor( private _previousdialog:MatDialog) { }

  ngOnInit(): void {
  }
  OnClickPrevious(){
    this._previousdialog.open(FormsComponent,{
      panelClass:"full-screen-dialog"
    })
  }
}
