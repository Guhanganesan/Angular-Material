import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private url = "http://127.0.0.1:5000/v1";

  constructor(public http: HttpClient) {  
  }  

  getEmployeeData() {
    return this.http.get<any[]>(this.url+"/get_employee");  
  }
  
  submitEmpData(emp_data:any){
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(`${this.url}/publish_employee`, emp_data, {'headers':headers});
  }

}