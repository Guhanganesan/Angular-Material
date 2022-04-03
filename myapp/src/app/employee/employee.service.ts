import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private url = "http://127.0.0.1:5000/v1";

  //For more details: https://github.com/Guhanganesan/Flask_Advanced

  headers = { 
    'content-type': 'application/json',
    'x-access-user': 'Guhan',
    'x-access-key': 'DJHKJHSAJHJFSAHHLKSJKLDFSALKSD'
  } 

  constructor(public http: HttpClient) {  
  }  

  getEmployeeData() {
    return this.http.get<any[]>(this.url+"/get_employee");  
  }
  
  submitEmpData(emp_data:any){
    return this.http.post(`${this.url}/publish_employee`, emp_data, {'headers':this.headers});
  }

  testBearerToken(){
    const test_data ={
      name:"Guhan",
      father:"Ganesan"
    } 
    return this.http.post(`${this.url}/test_token`, test_data, {'headers':this.headers});
  }

}