import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  @Input() manager_details:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.manager_details.name)
    console.log(this.manager_details.age)
  }

}
