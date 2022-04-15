import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  manager = {
    name:'Guhan',
    age:31,
    mobile:878937
  }

  constructor() { }

  ngOnInit(): void {
  }

}
