import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from './employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmpElement} from './employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(private _http:EmployeeService, private fb:FormBuilder) { }

  public empForm!: FormGroup;
  minDate = new Date();
  checked_status = false;

  displayedColumns = ['checked', 'name', 'age', 'address', 'salary'];
  emp_data = [];
  dataSource:any;
  submit_status = false;

  emp_details_mapper = new Map();
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
      console.log("test")
      this.getEmpDetails();
      this.empForm = this.fb.group({
        submit_date:['', Validators.required],
      })
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  } 

  getEmpDetails(){
    this._http.getEmployeeData().subscribe((val:any)=>{
     // console.log(val)
      if(val["status"] == "success"){
          this.emp_data = val["data"];
          this.dataSource = new MatTableDataSource<EmpElement>(this.emp_data);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);
      }
    })
  }

  onCheckboxChange(event:any, element:any){
    // console.log(element)
    // console.log(this.dataSource.filteredData)
    var temp = this.dataSource.filteredData;
    if(element == "checked"){
      // select all checkbox
      if(event.checked){
        this.checked_status = true;
        for(var i=0; i<this.dataSource.filteredData.length; i++){
           this.emp_details_mapper.set(this.dataSource.filteredData[i].id, this.dataSource.filteredData[i])
        }
      }else{
        this.checked_status = false;
        this.emp_details_mapper.clear();
      }
    }else{
      if(event.checked){
        this.emp_details_mapper.set(element.id, element);
      }else{
        this.emp_details_mapper.delete(element.id);
      }
    }
    //console.log(this.emp_details_mapper);
  }


  submitEmployeeDetails(){
      this.submit_status = true;
      let emp_list = Array.from(this.emp_details_mapper.values());
      console.log(emp_list)
      const entire_data = {
        submit_date: new Date(this.empForm.value.submit_date).toDateString(),
        employee_data: emp_list
      }
      this._http.submitEmpData(entire_data).subscribe((val:any)=>{
        console.log(val)
        if(val["status"] == "success"){
          this.submit_status = false;
          alert("Successfully Published")
        }else{
          this.submit_status = false;
          alert("Error publishing employee details")
        }
      })
  }


}


