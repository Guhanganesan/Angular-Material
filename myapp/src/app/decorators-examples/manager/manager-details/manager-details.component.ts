import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  @Input() manager_details:any;

  area_name:string;
  pin_code:number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.manager_details.name)
    // console.log(this.manager_details.age)
    this.childDetails();
  }

  showDetails(){
    console.log(this.manager_details.name)
    console.log(this.manager_details.age)
    console.log(this.manager_details.mobile)
  }

  childDetails(){
    this.area_name = "Ambedkar Street";
    this.pin_code =  777777;
  }

}
