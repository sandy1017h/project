import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManagerComponent } from 'src/app/manager/manager.component';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor( private _opendialog:MatDialog, private _closedialog:MatDialogRef<FormsComponent>, private _previousdialog:MatDialog) { }

  ngOnInit(): void {
  }
  OnClickOpen(){
    this._opendialog.open(ManagerComponent,{
      panelClass:"full-screen-dialog"
    })
  }
  OnClickClose(){
    this._closedialog.close()
  }
  OnClickPrevious(){
    this._previousdialog.open(FormsComponent)
  }
}
