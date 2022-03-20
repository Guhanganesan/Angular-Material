import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from './employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(private _http:EmployeeService) { }

  displayedColumns = ['id', 'name', 'age', 'address', 'salary'];
  emp_data = [];
  dataSource:any;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
      console.log("test")
      this.getEmpDetails();
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  } 

  getEmpDetails(){
    this._http.getEmployeeData().subscribe((val:any)=>{
      console.log(val)
      if(val["status"] == "success"){
          this.emp_data = val["data"];
          this.dataSource = new MatTableDataSource<EmpElement>(this.emp_data);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);
      }
    })
  }
}

export interface EmpElement {
  id:number,
  age:number,
  name: string,
  address: string,
  salary: string
}
