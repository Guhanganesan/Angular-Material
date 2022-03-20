import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private url = "http://localhost:5000/get_employee";

  constructor(public http: HttpClient) {  
  }  

  getEmployeeData() {
    console.log(this.http.get<any[]>(this.url))  
    return this.http.get<any[]>(this.url);  
  }  

}