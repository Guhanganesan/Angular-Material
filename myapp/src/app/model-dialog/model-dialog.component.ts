import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css']
})
export class ModelDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModelDialogComponent>) { }

  @Input() user_value:any;


  ngOnInit(): void {
  }

  
   

}
