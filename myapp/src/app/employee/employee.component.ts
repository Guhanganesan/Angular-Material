import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(private _http:EmployeeService) { }

  displayedColumns = ['id', 'name', 'age', 'address'];
  emp_data = [];
  dataSource = [];

  ngOnInit(): void {
      console.log("test")
      this.getEmpDetails();
  }

  getEmpDetails(){
    this._http.getEmployeeData().subscribe((val:any)=>{
      console.log(val)
      if(val["status"] == "success"){
          this.emp_data = val["data"];
          this.dataSource = this.emp_data;
          console.log(this.dataSource);
      }
    })
  }
}

export interface EmpElement {
  id:number,
  age:number,
  name: string;
  address: string;
}
