import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit, AfterViewInit {

  manager = {
    name:'Guhan Ganesan',
    age:31,
    mobile:88888
  }

  @ViewChild(ManagerDetailsComponent, {static:true}) child_comp: ManagerDetailsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // call child component's method
    this.child_comp.showDetails();
    // get child component's properties
    console.log(this.child_comp.area_name);
    console.log(this.child_comp.pin_code)
  }

}
